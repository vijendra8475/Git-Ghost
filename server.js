require("dotenv").config();
const express = require("express");

const webhookRoute = require("./routes/webhook");

const app = express();
app.use(express.json());

app.use("/webhook", webhookRoute);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});