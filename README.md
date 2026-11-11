# Data & Algorithms in Teaching — OER

A multilingual (English, German, French) scenario-based sensibilisation module for teacher educators.

## Files
- `index.html`: public learning module
- `editor.html`: local scenario editor
- `scenarios.json`: editable multilingual scenario bank
- `translations.json`: interface translations
- `app.js`, `editor.js`, `styles.css`: front-end
- `config.js`: optional AI backend URL
- `worker.js`: optional Cloudflare Worker backend for the AI reflection chatbot
- `LICENSE`: CC BY 4.0

## Publish on GitHub Pages
1. Upload **all files in this folder** to the root of your public repository (not the ZIP itself).
2. Repository Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
3. Wait for the Pages deployment in Actions to finish.

## Use the scenario editor
1. Open `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/editor.html`.
2. Select a scenario and edit the English, German and French text.
3. Click “Save in this browser” to keep a local browser copy, or “Download scenarios.json”.
4. To publish edits for everyone, upload the downloaded `scenarios.json` to the repository root and commit the change. The editor does not directly modify GitHub files.

## Enable the live AI reflection chatbot (optional)
The public GitHub Pages site cannot safely hold an OpenAI API key. Deploy `worker.js` as a Cloudflare Worker and store the key as a Worker secret.

Example using Wrangler:
```bash
npm install -g wrangler
wrangler login
wrangler deploy worker.js --name data-algorithmic-literacy-chat
wrangler secret put OPENAI_API_KEY
```
When prompted, paste your OpenAI API key. Do not put the key in GitHub or in any front-end file. You may set `OPENAI_MODEL` as a Worker environment variable (default: `gpt-4.1-mini`).

After deployment, copy the Worker URL (for example `https://data-algorithmic-literacy-chat.YOUR-SUBDOMAIN.workers.dev`) into `config.js`:
```js
window.REFLECTION_API_URL = "https://YOUR-WORKER-URL";
```
Commit the updated `config.js` to GitHub. The chatbot will then use the secure backend. API usage may incur costs; set usage limits and monitor billing in your OpenAI account.

## Important notes
- Scenario variation is currently random selection from a reviewed scenario bank. This is intentional for pedagogical consistency. The chatbot response is AI-generated only after a secure backend is configured.
- The editor is a lightweight content editor, not a GitHub-connected CMS. Publishing edits requires replacing `scenarios.json` in the repository.
- No participant responses are stored by this static site. The optional AI service receives the current scenario and conversation context to generate a response.
- Review translations and scenarios with local teacher educators before formal release.
- Consider adding a privacy notice and institutional contact before wider deployment.
