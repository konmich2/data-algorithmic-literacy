# Data & Algorithms in Teaching — OER

A multilingual (English, German, French) scenario-based sensibilisation module for teacher educators.

## Files
- `index.html`: public learning module
- `editor.html`: scenario editor
- `scenarios.json`: multilingual scenario bank
- `translations.json`: interface translations
- `app.js`, `editor.js`, `styles.css`: front-end
- `images/`: illustrative scenario photographs
- `LICENSE`: CC BY 4.0

## Graasp reflection chatbot
The reflection section embeds this Graasp player directly in the page:

https://graasp.org/player/cba6e921-46f9-4f6a-8691-2648cf3056ba/cba6e921-46f9-4f6a-8691-2648cf3056ba

No OpenAI API key or separate chatbot backend is required by this GitHub Pages site. The iframe loads the Graasp activity. If the Graasp player does not permit embedding in a particular browser or context, participants can use the “Open in a new tab” link shown above the embedded player.

Note: the embedded Graasp activity is a separate resource. The current page does not automatically transmit the selected scenario or participant's decision into Graasp. If you want scenario-specific chatbot context, that needs to be configured inside Graasp or added through a supported Graasp integration.

## Publish on GitHub Pages
1. Upload all files and folders in this package to the root of your public repository (not the ZIP itself).
2. Repository Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
3. Wait for the Pages deployment in Actions to finish.

## Use the scenario editor
1. Open `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/editor.html`.
2. Select a scenario and edit its English, German and French text.
3. Save locally or download `scenarios.json`.
4. To publish edits for everyone, upload the downloaded `scenarios.json` to the repository root and commit the change. The editor does not directly modify GitHub files.

## Important notes
- Scenario variation is random selection from a reviewed scenario bank.
- The editor is a lightweight content editor, not a GitHub-connected CMS.
- The Graasp chatbot is embedded as an external iframe; its availability, privacy practices and language behaviour are governed by the Graasp activity and its settings.
- Review scenarios and translations with teacher educators before formal release.
- Consider adding an institutional contact and a privacy notice before wider deployment.
