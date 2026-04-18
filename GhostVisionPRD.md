# GhostVision AI – Product Requirements Document (PRD)

## 📌 Project Overview

GhostVision AI is a context-aware AI GitHub agent that:

- Reads GitHub issues
- Understands repository structure (JavaScript/TypeScript)
- Selects only relevant files using a dependency graph
- Uses Google Gemini AI for reasoning
- Generates minimal, safe code fixes
- Automatically creates Pull Requests with explanation and confidence score

---

## 💥 Unique Value Proposition

- Context-aware file selection (not full repo dumping)
- Multi-step agent workflow (not single prompt)
- Explainable PRs with reasoning
- Confidence-based decision making
- End-to-end automation (Issue → PR)

---


## 👥 Target Users

- GitHub developers and contributors
- Open-source maintainers
- Hackathon judges

---

## ⚙️ Core Features (MVP)

- GitHub webhook trigger ("@ghostvision fix this")
- Issue understanding using Gemini
- Repository analysis (JS/TS only)
- File selection (max 2–5 files)
- Multi-step agent workflow:
  - Perception
  - Context selection
  - Planning
  - Action
  - Reflection
- Code generation (safe + minimal)
- Pull Request automation
- Explainability (reasoning + confidence score)

---

## 🧠 Agent Workflow (Detailed)

1. **Perception**
   - Parse and understand the GitHub issue using Gemini AI.
   - Extract problem, intent, and affected components.
2. **Context Selection**
   - Analyze repository structure and dependencies.
   - Build a lightweight dependency graph.
   - Select 2–5 most relevant files for context.
3. **Planning**
   - Devise a fix strategy using AI reasoning.
   - Plan minimal, safe code changes.
4. **Action**
   - Generate code changes for selected files only.
   - Ensure changes are safe, minimal, and style-consistent.
5. **Reflection**
   - Generate an explanation for the PR.
   - Assign a confidence score to the solution.
   - If confidence < 60%, do not create PR (explain only).

---

## 🛡️ Safety Constraints

- Only modify selected files
- No destructive changes
- No large refactoring (>30% change)
- Always generate explanation before PR
- If confidence < 60%, DO NOT create PR

---

## 🧠 AI Integration

Use Google Gemini API for:

- Issue parsing
- File selection
- Fix generation
- PR explanation

---

## 🏗️ Technical Architecture

- **Backend:** Node.js (Express or Fastify)
- **GitHub Webhooks** for event listening
- **GitHub REST API** for repo/PR operations
- **Services:**
  - Webhook Handler
  - Agent Orchestrator
  - GitHub Service
  - AI Service
  - Repo Analysis Service
  - PR Service

---

## 🔄 System Flow

1. User comments "@ghostvision fix this" on a GitHub issue.
2. Webhook handler receives the event.
3. System fetches issue and repository data.
4. Repo analysis service builds a dependency graph and selects relevant files.
5. AI service parses the issue, reasons about the problem, and generates a fix plan.
6. AI generates code changes for selected files.
7. PR service creates a new branch, commits changes, and opens a Pull Request with explanation and confidence score.

---

## 🔌 API Design

### POST /webhook
- Receives GitHub events (e.g., issue_comment)

#### Example Request
```json
{
  "action": "created",
  "issue": { "number": 42, "title": "Bug: X fails", "body": "Steps to reproduce..." },
  "comment": { "body": "@ghostvision fix this" },
  "repository": { "full_name": "user/repo" }
}
```

#### Example Response
```json
{
  "status": "processing",
  "message": "GhostVision AI is analyzing the issue and will create a PR soon."
}
```

### /analyze-issue
- Input: Issue text, repo metadata
- Output: Parsed problem, intent, affected components

### /analyze-repo
- Input: Repo URL or local path
- Output: Dependency graph, relevant files

### /generate-fix
- Input: Issue analysis, selected files
- Output: Code diff/patch, explanation, confidence score

### /create-pr
- Input: Branch, code changes, PR metadata
- Output: PR URL, status

---

## 🎬 Demo Plan (IMPORTANT)

1. Show a GitHub issue
2. Trigger "@ghostvision fix this"
3. Show processing logs (console or UI)
4. Show selected files for context
5. Display the generated Pull Request
6. Highlight the PR explanation and confidence score

---

## 🧪 Success Metrics

- PR generated within ~60 seconds
- ≤5 files used for context
- Explanation included in every PR
- End-to-end demo works live

---

## ⚠️ Constraints

- JS/TS repos only
- No full repo indexing
- Prototype only
- No guarantee of perfect correctness

---

## 💡 Optional Features

- Test generation
- "@ghostvision explain this"
- Repo visualization UI

---

## 🚨 Failure Handling

- If confidence < 60% → explain only, no PR
- If no relevant files → ask for clarification
- If generation fails → log and notify user

---

## 🏆 Why This Project Wins

- **Speed:** Issue to PR in seconds
- **Explainability:** Every PR includes reasoning and confidence
- **Intelligent File Selection:** Only the most relevant files are used
- **True Agentic Workflow:** Multi-step, context-aware, and safe

---

## 🚀 Implementation Readiness

This PRD is designed for immediate development using GitHub Copilot Agent.

**Recommended development order:**
1. Webhook integration
2. GitHub API (fetch issue + files)
3. Gemini AI integration (issue parsing)
4. File selection logic
5. Code generation
6. PR creation
7. Demo flow setup

---
