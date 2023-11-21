const express = require("express");
const { getAllTopics } = require("./db/controllers/topics.controller");
const { wrongPathError, psqlErrors } = require("./errors");
const {
  postCommentsByArticleId,
} = require("./db/controllers/articles.controller");
const app = express();

app.use(express.json());

app.get("/api/topics", getAllTopics);
app.post("/api/articles/:article_id/comments", postCommentsByArticleId);
app.get("*", wrongPathError);

app.use(psqlErrors)

module.exports = app;
