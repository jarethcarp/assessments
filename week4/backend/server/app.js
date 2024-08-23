import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

import handlerFunc from "./controller.js";

app.get("/api/cards", handlerFunc.getCards);

app.post("/api/addCard", handlerFunc.addCard);

app.delete("/api/deleteCard/:id", handlerFunc.deleteCard);

app.put("/api/editCard", handlerFunc.editCard);

ViteExpress.listen(app, 2500, () =>
  console.log("Things are running. See http://localhost:2500")
);
