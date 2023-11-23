const express = require("express");
const { getAllTopics } = require("./db/controllers/topics.controller");

const {
  getArticleById,
  getAllArticles,
  getArticleComments,
  postCommentsByArticleId,
} = require("./db/controllers/articles.controller");
const { wrongPathError, psqlErrors, customErrors } = require("./errors");
const { getEndpoints } = require("./db/controllers/api.controller");
const { getAllUsers } = require("./db/controllers/users.controller");

const app = express();
app.use(express.json());

app.get("/api/topics", getAllTopics);
app.get("/api", getEndpoints);
app.get("/api/articles", getAllArticles);
app.get("/api/articles/:article_id", getArticleById);
app.get("/api/users", getAllUsers)
app.get("/api/articles/:article_id/comments", getArticleComments);
app.post("/api/articles/:article_id/comments", postCommentsByArticleId);
app.get("*", wrongPathError);

app.use(psqlErrors);
app.use(customErrors);

module.exports = app;
