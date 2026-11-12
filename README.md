# Data & Algorithms in Teaching — OER

A multilingual (English, German, French) scenario-based sensibilisation module for teacher educators. It includes classroom scenarios, decision feedback, reflection prompts, an editable scenario bank, and an optional AI-powered reflection chatbot. Scenario images have been removed in this version.

## Files
- `index.html`: public learning module
- `editor.html`: local scenario editor
- `scenarios.json`: editable multilingual scenario bank
- `translations.json`: interface translations
- `app.js`, `editor.js`, `styles.css`: front-end
- `config.js`: AI backend URL
- `worker.js`: Cloudflare Worker backend for the OpenAI reflection chatbot
- `LICENSE`: CC BY 4.0

## Publish on GitHub Pages
1. Extract this ZIP file.
2. Open your GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload the contents of this folder directly into the repository root (not the ZIP itself and not an extra enclosing folder).
5. Commit the changes and wait for GitHub Pages deployment.

## Enable the AI reflection chatbot securely
The chatbot requires a separate backend. **Never put your OpenAI API key in GitHub or in a front-end file.**

1. Create a Cloudflare Worker.
2. Paste the contents of `worker.js` into the Worker editor and deploy it.
3. In the Worker settings, add a secret named `OPENAI_API_KEY` with your OpenAI API key.
4. Optionally set `OPENAI_MODEL` (the Worker has a default model).
5. Copy the deployed Worker URL into `config.js`, for example:

```js
window.REFLECTION_API_URL = "https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev";
```

6. Commit the updated `config.js` to GitHub.

The chatbot is not live until the Worker is deployed and the URL is configured. API usage may incur costs; set usage limits and monitor billing. Before public release, consider adding rate limiting, a privacy notice, and an institutional contact. Do not enter identifiable pupil information into the chatbot.

## Scenario editor
Open `editor.html` on the published site. You can edit scenario text in English, German and French, save a draft in the current browser, or download an updated `scenarios.json`. To publish edits, replace the repository's `scenarios.json` and commit it. The editor does not write directly to GitHub and does not automatically translate text.

## Notes
Scenario selection is random from a reviewed scenario bank. The chatbot is AI-generated only after the secure backend is configured. The static site does not store participant responses. The optional AI service receives the current scenario and conversation context.

## Licence
Creative Commons Attribution 4.0 International (CC BY 4.0). See `LICENSE`.


## Individual scenario sharing and editing

The scenario editor now supports editing all English, German and French fields. **Save in this browser** stores the edited scenario collection in that browser, and the main website on that same device uses the saved version.

Each scenario can be shared independently. The Share button creates a URL containing that scenario's content; recipients open the link directly at the shared scenario. This does not require a database or account. The link is a snapshot: if you edit the scenario later, create and share a new link to distribute the updated version.

For permanent changes to the default scenario collection for all visitors, export `scenarios.json` from the editor and replace the repository file on GitHub.
