# Add scenarios using GitHub

The public website displays the six scenarios in `scenarios.json`. There is no editor on the public website.

## Add a scenario

1. Open your GitHub repository.
2. Open `scenarios.json`.
3. Click the pencil icon (**Edit this file**).
4. Copy the example object from `SCENARIO_TEMPLATE.json`.
5. Paste it at the end of the scenarios array in `scenarios.json`, immediately before the final closing `]`.
6. Add a comma after the previous scenario object (but not after the new final object).
7. Replace the example text in all three languages: `en`, `de`, and `fr`.
8. Give the scenario a unique `id` using lowercase letters and hyphens, e.g. `peer-feedback`.
9. Add or remove response options if needed. Each option needs a unique `id`, a `label` in all three languages, and `feedback` in all three languages.
10. Click **Commit changes**.

GitHub Pages will publish the updated scenario list after deployment. The new scenario will then appear automatically on the website.

## Important content structure

Every scenario needs:
- `id`
- `title` in English, German and French
- `context` in all three languages
- `question` in all three languages
- at least two `options`, each with an `id`, `label`, and `feedback` in all three languages
- `reflection` in all three languages

Keep the JSON syntax valid: use double quotes around keys and text, and do not leave a comma after the final item in an object or array.

## Share an individual scenario

Open the scenario on the website and use **Share this scenario**. The link contains a snapshot of that scenario. If you later change its content in GitHub, create and share a new link so recipients receive the updated version.

## Preview changes

After committing, wait for the GitHub Pages deployment to finish, then reload the website. You can test the JSON before committing with a JSON validator, but do not paste pupil names or sensitive data into public tools.
