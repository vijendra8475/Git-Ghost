async function handleCommand(command, context) {
  const { issueTitle, issueBody } = context;

  if (command.startsWith("fix")) {
    return `
🔧 Suggested Fix:

Issue: ${issueTitle}

Possible solution:
- Check related function logic
- Add proper error handling
- Verify API responses

⚠️ This is a prototype suggestion.
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