# URL Mapping Script for Axe Testing

This script automatically detects which content pages have changed in a git diff and maps them to their corresponding URLs for accessibility testing with axe-core.

## How it works

1. **Detects changed files** using `git diff`:
   - In PR context: compares against the base branch
   - In push context: compares against the previous commit

2. **Maps components to URLs** by:
   - Reading `data/pages.ts` to get the page URL mapping
   - Checking if changed files are template components (e.g., `AudioTemplate.tsx`)
   - Converting template names to content slugs (e.g., `AudioTemplate` → `audio` → `/audio`)

3. **Special cases**:
   - If layout components change (Header, Footer, Nav, Layout), includes homepage
   - If data files change, includes homepage + first few pages as sanity check
   - If no relevant changes detected, defaults to homepage

## Usage

```bash
# Get URLs with homepage included
node scripts/get-changed-urls.js http://localhost:3000 --include-home

# Get URLs without forcing homepage (only affected pages)
node scripts/get-changed-urls.js http://localhost:3000
```

## Output

The script outputs URLs (one per line):

```
http://localhost:3000
http://localhost:3000/audio
http://localhost:3000/forms
```

## In GitHub Actions

The workflow calls this script and pipes each URL to `axe` for accessibility testing. See `.github/workflows/axe.yaml` for the full implementation.

## Extending the mapping

To add new pages:
1. Add the page to `data/pages.ts` with a `content` field
2. Add the corresponding template name mapping in this script's `templateNameMap` object
3. The script will automatically detect changes to that template

Example:
```javascript
// In data/pages.ts
{ name: "Example", href: "/example", content: "example" }

// In scripts/get-changed-urls.js
const templateNameMap = {
  // ... existing mappings
  ExampleTemplate: "example",
};
```
