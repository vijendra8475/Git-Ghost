export const handleWebhook = async (req, res) => {
  const event = req.headers["x-github-event"];
  const payload = req.body;

  console.log("📩 Event received:", event);

  if (event === "issue_comment") {
    const comment = payload.comment.body;

    if (comment.includes("@ghostvision")) {
      console.log("🔥 Trigger detected!");

      // TEMP: just log issue
      console.log("Issue:", payload.issue.title);

      // Later → call orchestrator here
    }
  }

  res.status(200).json({ status: "received" });
};