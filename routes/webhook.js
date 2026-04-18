const express = require("express");
const router = express.Router();
const { parseCommand } = require("../utils/parser");
const { postComment } = require('../services/github')

router.post("/", (req, res) => {
    const event = req.headers["x-github-event"];
    const payload = req.body;

    if (event === "issue_comment") {
        const comment = payload.comment.body;

        console.log("💬 Comment:", comment);

        const command = parseCommand(comment);

        const { postComment } = require("../services/github");

        if (command) {
            console.log("🔥 Command detected:", command);

            const commentsUrl = payload.issue.comments_url;

            postComment(commentsUrl, `👀 Received command: "${command}"`);
        }
    }

    res.status(200).send("OK");
});

module.exports = router;