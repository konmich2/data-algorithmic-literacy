# Add scenarios through GitHub

The public website displays the scenarios stored in `scenarios.json`. There is no editor on the website.

1. Open your GitHub repository and select the `main` branch.
2. Open `scenarios.json` and click the pencil icon.
3. Copy the structure from `SCENARIO_TEMPLATE.json`.
4. Add the new scenario object inside the outer array, separated from the previous scenario by a comma.
5. Give it a unique lowercase `id` (for example, `peer-feedback`).
6. Complete the title, context, question, option labels, option feedback and reflection prompt in `en`, `de` and `fr`.
7. Keep valid JSON syntax (double quotes; no trailing comma after the last item).
8. Click **Commit changes** and wait for GitHub Pages to deploy. The new scenario will then appear in the website.

To edit an existing scenario, change its text in the same file. Do not delete the surrounding JSON structure.
