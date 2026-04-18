const axios = require("axios");

async function postComment(commentsUrl, message) {
  try {
    await axios.post(
      commentsUrl,
      { body: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );
  } catch (error) {
    console.error("❌ Failed to post comment:", error.message);
  }
}

module.exports = { postComment };