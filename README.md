# Data & Algorithms in Teaching — Open Educational Resource

A multilingual interactive sensibilisation resource for teacher educators (English, German and French).

## Package contents
- `index.html` — main interactive OER
- `editor.html` — scenario editor
- `app.js`, `editor.js`, `styles.css` — website functionality and design
- `scenarios.json` — six multilingual scenarios
- `translations.json` — interface translations
- `images/` — six scenario photographs
- `LICENSE` — CC BY 4.0

## Graasp chatbot
The reflection section embeds the supplied Graasp activity in an iframe:
https://graasp.org/player/cba6e921-46f9-4f6a-8691-2648cf3056ba/cba6e921-46f9-4f6a-8691-2648cf3056ba

There is no OpenAI API key, API endpoint, Cloudflare Worker or chatbot backend in this package. The Graasp activity is loaded directly from Graasp. If embedding is blocked by browser or Graasp security settings, the page provides an “Open in a new tab” link.

The selected scenario and participant's decision are not automatically sent to Graasp. The Graasp activity runs independently.

## Publish on GitHub Pages
1. Extract this ZIP on your computer.
2. Upload **the contents** of the extracted folder into the root of your existing public repository. Do not upload the ZIP itself.
3. Make sure the `images` folder is uploaded with all six JPG files. The folder must sit beside `index.html`, not inside another folder.
4. Commit the changes to the `main` branch.
5. In GitHub, check Actions for the Pages deployment. Open the website after the deployment completes.

The expected repository structure is:
```
index.html
editor.html
app.js
editor.js
styles.css
scenarios.json
translations.json
README.md
LICENSE
images/
  assessment.jpg
  differentiation.jpg
  analytics.jpg
  inclusion.jpg
  prediction.jpg
  ai-feedback.jpg
```

## Scenario editor
Open `/editor.html` on the published site. The editor supports English, German and French content, including scenario titles, context, decision options, feedback, reflection prompts and image paths.

The editor stores drafts in the current browser. To publish an edit to all visitors, download the updated `scenarios.json`, upload it to the repository root, and commit the replacement.

## Notes
- Scenarios are randomly selected from a reviewed bank of six cases.
- The chatbot is an embedded external Graasp activity; its availability and privacy settings are controlled by Graasp.
- Review translations, scenarios and image reuse conditions before formal institutional release.
