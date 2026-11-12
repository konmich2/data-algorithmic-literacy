let scenarios = [], translations = {}, lang = "en", current = null, selectedChoice = null;
const $ = id => document.getElementById(id);

async function init() {
  try {
    const [scenarioResponse, translationResponse] = await Promise.all([
      fetch("scenarios.json"), fetch("translations.json")
    ]);
    if (!scenarioResponse.ok || !translationResponse.ok) throw new Error("Could not load OER content files.");
    scenarios = await scenarioResponse.json();
    translations = await translationResponse.json();
  } catch (error) {
    console.error(error);
    document.body.insertAdjacentHTML("afterbegin",
      '<p class="load-error">The scenario content could not be loaded. Please refresh the page or check that scenarios.json and translations.json are in the repository root.</p>');
    return;
  }

  lang = localStorage.getItem("dal-lang") || "en";
  if (!translations[lang]) lang = "en";
  $("language").value = lang;
  applyLanguage();
  $("language").addEventListener("change", event => {
    lang = event.target.value;
    localStorage.setItem("dal-lang", lang);
    applyLanguage();
    if (current) {
      renderScenario(current);
      if (selectedChoice) showFeedback(selectedChoice);
    }
  });
  $("start").addEventListener("click", startScenario);
  $("another").addEventListener("click", startScenario);
}

function t(key) {
  return (translations[lang] && translations[lang][key]) || (translations.en && translations.en[key]) || key;
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
}

function startScenario() {
  if (!scenarios.length) return;
  let pool = scenarios.filter(scenario => !current || scenario.id !== current.id);
  if (!pool.length) pool = scenarios;
  current = pool[Math.floor(Math.random() * pool.length)];
  selectedChoice = null;
  $("workspace").classList.remove("hidden");
  $("reflectionPanel").classList.add("hidden");
  $("feedback").classList.add("hidden");
  renderScenario(current);
  $("workspace").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderScenario(scenario) {
  const index = scenarios.findIndex(item => item.id === scenario.id) + 1;
  $("scenarioCount").textContent = `${t("scenario").toUpperCase()} · ${index} / ${scenarios.length}`;
  $("scenarioTitle").textContent = scenario.title[lang] || scenario.title.en;
  $("scenarioImage").src = scenario.image || "images/assessment.jpg";
  $("scenarioImage").alt = scenario.title[lang] || scenario.title.en;
  $("category").textContent = scenario.category[lang] || scenario.category.en;
  $("scenarioContext").textContent = scenario.context[lang] || scenario.context.en;
  $("scenarioQuestion").textContent = scenario.question[lang] || scenario.question.en;
  $("choices").replaceChildren();

  scenario.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}.</span><span>${escapeHTML(option.label[lang] || option.label.en)}</span>`;
    button.addEventListener("click", () => {
      selectedChoice = option;
      document.querySelectorAll(".choice").forEach(item => item.classList.remove("selected"));
      button.classList.add("selected");
      showFeedback(option);
    });
    $("choices").appendChild(button);
  });
}

function showFeedback(option) {
  const feedback = option.feedback[lang] || option.feedback.en;
  const insight = current.insight[lang] || current.insight.en;
  $("feedback").innerHTML =
    `<h4>${escapeHTML(t("feedbackHeading"))}</h4><p>${escapeHTML(feedback)}</p>` +
    `<h4>${escapeHTML(t("behindHeading"))}</h4><p>${escapeHTML(insight)}</p>`;
  $("feedback").classList.remove("hidden");
  $("reflectionPrompt").textContent = current.reflection[lang] || current.reflection.en;
  $("reflectionPanel").classList.remove("hidden");
}

function escapeHTML(value) {
  return String(value || "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[character]));
}

init();
