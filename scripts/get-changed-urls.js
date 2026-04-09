#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Get list of URLs to scan based on changed files in git.
 * Maps changed component templates back to their URLs using data/pages.ts
 *
 * Usage:
 *   node scripts/get-changed-urls.js [baseUrl] [--include-home]
 *
 * Example:
 *   node scripts/get-changed-urls.js http://localhost:3000 --include-home
 */

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

const baseUrl = process.argv[2] || "http://localhost:3000"
const includeHome = process.argv.includes("--include-home")

// Get git changes
let changedFiles = []
try {
	let diff
	// Check if running in PR context (GitHub Actions sets GITHUB_BASE_REF)
	if (process.env.GITHUB_BASE_REF) {
		// For PR: compare against base branch
		diff = execSync(
			`git diff --name-only origin/${process.env.GITHUB_BASE_REF}...HEAD`
		).toString()
	} else {
		// For push: compare against previous commit
		diff = execSync("git diff --name-only HEAD~1 HEAD").toString()
	}
	changedFiles = diff.trim().split("\n").filter(Boolean)
} catch (error) {
	console.error("Error getting changed files:", error.message)
	process.exit(1)
}

// Read pages data to build URL mapping
let pagesData
try {
	const pagesContent = fs.readFileSync(
		path.join(__dirname, "../data/pages.ts"),
		"utf-8"
	)

	// Extract the pages array from the TypeScript file
	const regex = /export const pages: IPage\[\] = \[([\s\S]*?)\]/
	const match = pagesContent.match(regex)
	if (!match) {
		console.error("Could not parse pages.ts")
		process.exit(1)
	}

	pagesData = []
	const arrayContent = match[1]

	// Parse each page entry
	const pageRegex =
		/{\s*name:\s*"([^"]+)",\s*href:\s*"([^"]+)",\s*content:\s*"([^"]+)"\s*}/g
	let pageMatch
	while ((pageMatch = pageRegex.exec(arrayContent)) !== null) {
		pagesData.push({
			name: pageMatch[1],
			href: pageMatch[2],
			content: pageMatch[3],
		})
	}
} catch (error) {
	console.error("Error parsing pages.ts:", error.message)
	process.exit(1)
}

// Map component/template files to content names
const templateNameMap = {
	AlertsTemplate: "alerts",
	AnimationsTemplate: "animations",
	AudioTemplate: "audio",
	BreadcrumbsTemplate: "breadcrumbs",
	ButtonsTemplate: "buttons",
	CaptchasTemplate: "captchas",
	ChartsTemplate: "charts",
	FormsTemplate: "forms",
	HeadingsTemplate: "headings",
	IconsTemplate: "icons",
	ImagesTemplate: "images",
	LinksTemplate: "links",
	ListsTemplate: "lists",
	MenusTemplate: "menus",
	ModalsTemplate: "modals",
	NavigationTemplate: "navigation",
	PaginationTemplate: "pagination",
	TablesTemplate: "tables",
	VideoTemplate: "video",
}

// Find which URLs need to be scanned
const urlsToScan = new Set()

// Always include homepage if flag is set or if certain key files change
if (includeHome) {
	urlsToScan.add(baseUrl)
}

for (const file of changedFiles) {
	// Check if it's a content template file
	for (const [templateName, contentName] of Object.entries(templateNameMap)) {
		if (file.includes(templateName)) {
			// Find the corresponding page
			const page = pagesData.find((p) => p.content === contentName)
			if (page) {
				urlsToScan.add(`${baseUrl}${page.href}`)
			}
			break
		}
	}

	// If pages.ts or data files changed, include home and some key pages
	if (file.includes("data/") || file.includes("utils.ts")) {
		urlsToScan.add(baseUrl)
		// Add first few pages as sanity check
		pagesData.slice(0, 3).forEach((page) => {
			urlsToScan.add(`${baseUrl}${page.href}`)
		})
		break
	}

	// If layout/core components changed, scan home
	if (
		file.includes("components/Layout/") ||
		file.includes("components/Header/") ||
		file.includes("components/Footer/") ||
		file.includes("components/Nav/")
	) {
		urlsToScan.add(baseUrl)
	}
}

// Output URLs
if (urlsToScan.size === 0) {
	// No relevant changes detected, just scan homepage
	console.log(baseUrl)
} else {
	console.log(Array.from(urlsToScan).join("\n"))
}
