# Data & Algorithms in Teaching

A multilingual (English, German and French) scenario-based sensibilisation resource for teacher educators. The public website presents six classroom scenarios, decision options, explanatory feedback and reflection prompts. It does not include a public scenario editor.

## Files in this package

- `index.html`: website structure and homepage wording
- `app.js`: scenario interaction and optional AI reflection chat
- `styles.css`: visual design
- `scenarios.json`: the six scenario records
- `translations.json`: interface translations
- `config.js`: URL of the optional AI reflection service
- `config.example.js`: configuration example
- `worker.js`: Cloudflare Worker backend for the AI reflection service
- `SCENARIO_TEMPLATE.json`: template for adding scenarios
- `HOW_TO_ADD_SCENARIOS.md`: instructions for editing the scenario list in GitHub
- `LICENSE`: CC BY 4.0 licence

## Publish on GitHub Pages

1. Extract this ZIP on your computer.
2. Open your repository and select the `main` branch.
3. Upload the files in this folder directly into the repository root (not the ZIP itself and not inside an extra folder).
4. When GitHub asks about files with the same names, choose to replace/overwrite them.
5. Remove obsolete files from the repository, especially `editor.html` and `editor.js` if they are still present.
6. Commit the changes and wait for the Pages deployment to finish successfully.

Keep GitHub Pages configured to deploy from `main` and `/(root)`. The expected website URL is `https://konmich2.github.io/data-algorithmic-literacy/`.

## Add scenarios

There is no editor link or editor page on the public website. To add or change scenarios, edit `scenarios.json` directly in GitHub. Use `SCENARIO_TEMPLATE.json` and follow `HOW_TO_ADD_SCENARIOS.md`. Each new scenario must include English, German and French text. GitHub Pages will display it after the commit is deployed.

## AI reflection chatbot

The AI chat requires a deployed Cloudflare Worker. The API key must remain a server-side secret and must never be placed in public JavaScript. Deploy `worker.js`, set the `OPENAI_API_KEY` secret in Cloudflare, then put the Worker endpoint URL in `config.js` as `window.REFLECTION_API_URL`. The chat is optional; the scenarios and reflection prompts can be used without it.

## Licence

The educational material in this package is provided under CC BY 4.0. Third-party services are subject to their own terms.
