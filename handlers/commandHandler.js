async function handleCommand(command, context) {
    const { issueTitle, issueBody } = context;

    if (command === "help") {
        return `
## 🤖 GhostVision Commands

- \`@ghostvision fix <issue>\` → Suggest fix
- \`@ghostvision explain <issue>\` → Explain problem
- \`@ghostvision test\` → Check bot status

---
✅ Prototype version
`;
    }

    if (command === "test") {
        return "✅ GhostVision is active and working.";
    }

    if (command.startsWith("fix")) {
        return `
## 🔧 GhostVision Fix Suggestion

**Issue:** ${issueTitle}

**Analysis:**
- Possible logic error
- Missing validation
- Edge case not handled

**Suggested Fix:**
- Review related function
- Add error handling
- Test with edge inputs

---
⚠️ *Prototype response (AI coming soon)*
`;
    }

    if (command.startsWith("explain")) {
        return `
📖 Explanation:

Issue: ${issueTitle}

This issue might be caused by:
- Incorrect logic flow
- Missing validation
- Unexpected input

⚠️ Prototype response (not AI yet)
`;
    }

    return "❓ Unknown command.";
}

module.exports = { handleCommand };
