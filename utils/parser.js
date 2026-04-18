function parseCommand(comment) {
  if (!comment) return null;

  const trigger = "@ghostvision";

  // MUST start with trigger (important)
  if (!comment.trim().toLowerCase().startsWith(trigger)) {
    return null;
  }

  const command = comment.slice(trigger.length).trim();

  return command || null;
}

module.exports = { parseCommand };