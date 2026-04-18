const express = require("express");
const router = express.Router();
const { parseCommand } = require("../utils/parser");
const { postComment } = require('../services/github')
const { handleCommand } = require("../handlers/commandHandler");



router.post("/", async (req, res) => {
    const event = req.headers["x-github-event"];
    const payload = req.body;



    if (event === "issue_comment") {
        const issueTitle = payload.issue.title;
        const issueBody = payload.issue.body;
        const comment = payload.comment.body;
        const command = parseCommand(comment);

        if (command) {
            console.log("🔥 Command:", command);

            const response = await handleCommand(command, {
                issueTitle: payload.issue.title,
                issueBody: payload.issue.body,
            });

            const commentsUrl = payload.issue.comments_url;

            await postComment(commentsUrl, response);
        }
    }

    res.status(200).send("OK");
});
module.exports = router;