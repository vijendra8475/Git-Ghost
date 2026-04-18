function parseCommand(comment) {
  if (!comment) return null;

  const trigger = "@ghostvision";

  if (!comment.includes(trigger)) return null;

  const command = comment.split(trigger)[1]?.trim();

  return command || null;
}

module.exports = { parseCommand };