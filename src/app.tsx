import express from "express";
import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";
import { IndexPage } from "./IndexPage";

const app = express();

app.get("/", (req, res) => {
  const htmlResult = `<!doctype html>
    ${ReactDOMServer.renderToString(<IndexPage />)}
  `;

  fs.writeFileSync(path.resolve("./public/", "index.html"), htmlResult, "utf8");

  res.send(htmlResult);
});

app.listen(3000, () => {
  console.log("Running on 3000");
});
