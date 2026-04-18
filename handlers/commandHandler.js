async function handleCommand(command) {
  if (!command) return "No command found.";

  if (command.startsWith("fix")) {
    return `🔧 Attempting to fix: "${command.replace("fix", "").trim()}"`;
  }

  if (command.startsWith("explain")) {
    return `📖 Explaining: "${command.replace("explain", "").trim()}"`;
  }

  if (command === "test") {
    return "✅ Bot is working perfectly.";
  }

  return "❓ Unknown command. Try: fix / explain / test";
}

module.exports = { handleCommand };