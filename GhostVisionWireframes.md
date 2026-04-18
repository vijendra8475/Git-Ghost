# GhostVision AI – Low-Fidelity Wireframes

These wireframes represent the key UI screens and navigation for the GhostVision AI prototype, as described in the PRD. Use these as a guide for frontend implementation and demo.

---

## 🧭 Navigation Bar

**Expanded Sidebar**
```
+-----------------------------+
| Dashboard                   |
| Processing                  |
| File Context                |
| PR Preview                  |
| Explain Mode                |
+-----------------------------+
```

**Collapsed Sidebar**
```
+-----+
| D   |
| P   |
| F   |
| PR  |
| E   |
+-----+
```
- D = Dashboard
- P = Processing
- F = File Context
- PR = PR Preview
- E = Explain Mode

---

## 🏠 Dashboard (Main Screen)
```
+-----------------------------+---------------------------------------------+
| [Sidebar]                   | [GitHub Issue]                              |
|                             | Title: [Issue Title]                        |
|                             | Description: [Issue Description]            |
|                             |                                             |
|                             | [ Run GhostVision ]                         |
|                             | Status: [Idle/Processing/Done]              |
|                             |                                             |
|                             | -------- Output Preview --------            |
|                             | Selected Files: [file1.js, file2.ts]        |
|                             | Summary: [Short AI summary]                 |
+-----------------------------+---------------------------------------------+
```

---

## ⚙️ Processing View (Agent Workflow)
```
+-----------------------------+---------------------------------------------+
| [Sidebar]                   | GhostVision Agent Workflow                  |
|                             | ------------------------------------------  |
|                             | [✓] Perception        - Parsed issue        |
|                             | [✓] Context Selection - Selected files      |
|                             | [✓] Planning          - Fix plan            |
|                             | [ ] Action            - (pending)           |
|                             | [ ] Reflection        - (pending)           |
|                             | ------------------------------------------  |
|                             | Step Output: [Current/last step output]     |
+-----------------------------+---------------------------------------------+
```

---

## 📂 File Context View
```
+-----------------------------+---------------------------------------------+
| [Sidebar]                   | Selected Files                              |
|                             | ------------------------------------------  |
|                             | [file1.js]   [file2.ts]   [file3.ts]        |
|                             |                                             |
|                             | Click a file to view details                |
|                             |                                             |
|                             | File: file2.ts                              |
|                             | Summary: [AI-generated summary]             |
|                             | Why Selected: [Reason]                      |
+-----------------------------+---------------------------------------------+
```

---

## 🧾 PR Preview Screen
```
+-----------------------------+---------------------------------------------+
| [Sidebar]                   | Pull Request Preview                        |
|                             | ------------------------------------------  |
|                             | PR Title: [Auto-fix: Issue #42]             |
|                             |                                             |
|                             | ----------- Code Diff -----------           |
|                             | - old line                                  |
|                             | + new line                                  |
|                             | ...                                         |
|                             | ------------------------------------------  |
|                             | Explanation: [AI-generated explanation]     |
|                             | Confidence Score: 82%                       |
+-----------------------------+---------------------------------------------+
```

---

## 🔍 Explain Mode Screen (Optional)
```
+-----------------------------+---------------------------------------------+
| [Sidebar]                   | Explain Mode                                |
|                             | ------------------------------------------  |
|                             | Issue Breakdown: [AI summary]               |
|                             | Root Cause: [Explanation]                   |
|                             | Suggested Fix: [Description, no code diff]  |
+-----------------------------+---------------------------------------------+
```

---

## 📐 Layout Notes
- Sidebar is always visible on the left (expanded or collapsed).
- Main content area changes per screen.
- Use clear section headers and boxes for each area.
- All screens are single-column for demo clarity.
- Focus is on process, selected files, and explainability.

---

These wireframes are ready to guide your React frontend implementation and hackathon demo, clearly reflecting the PRD system flow:  
**Issue → AI Processing → File Selection → Fix → PR**
