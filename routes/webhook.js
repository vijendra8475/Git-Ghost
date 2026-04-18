const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const event = req.headers["x-github-event"];
  const payload = req.body;

  console.log("📩 Event:", event);

  if (event === "issue_comment") {
    console.log("💬 Comment:", payload.comment.body);
  }

  res.status(200).send("OK");
});

module.exports = router;