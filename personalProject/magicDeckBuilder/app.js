import express from "express";
import session from "express-session";
import ViteExpress from "vite-express";
import { User, Decks, CardList, CardStore } from "./server/model.js";
import bcryptjs from "bcryptjs";

const app = express();
const port = "5173";
ViteExpress.config({ printViteDevServerHost: true });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "StormCrow", saveUninitialized: true, resave: false })
);

const loginRequired = (req, res, next) => {
  if (!req.session.userId) {
    res.status(401).json({ error: "Unauthorized" });
  } else {
    next();
  }
};

ViteExpress.listen(app, port, () =>
  console.log(
    `Watch out! The server is listening to you. It's in your walls on http://localhost:${port}`
  )
);

// Requests related to managing decks

app.get("/api/decks", loginRequired, async (req, res) => {
  if (req.session.userId) {
    const decks = await Decks.findAll({
      where: { userId: req.session.userId },
    });
    res.send(decks);
  }
  console.log("Finished /api/decks");
});

app.get("/api/all-decks", async (req, res) => {
  const decks = await Decks.findAll();
  res.send(decks);
  console.log("Finished /api/decks");
});

app.post("/api/add-deck", async (req, res) => {
  if (req.session.userId) {
    const newDeck = await Decks.create({
      userId: req.session.userId,
      deckName: "New Deck",
      colors: "{C}",
      format: "Any",
    });

    console.log("Finished /api/add-deck");

    return res.send({
      success: true,
    });
  } else {
    return res.send({
      success: false,
    });
  }
});

app.post("/api/delete-deck", async (req, res) => {
  const { deckId } = req.body;
  const deck = await Decks.findOne({ where: { id: deckId } });
  if (deck.userId === req.session.userId) {
    console.log("Finished /api/delete-deck");
    Decks.destroy({ where: { id: deckId } });
    return res.send({
      success: true,
    });
  } else {
    console.log("Finished /api/delete-deck");
    return res.send({
      message: "Failed to delete",
      success: false,
    });
  }
});

app.put("/api/update-deck", async (req, res) => {
  console.log("Start of update");
  const { id, deckName, deckcolor, deckFormat } = req.body;
  const updateDeck = await Decks.findOne({ where: { id: id } });

  if (updateDeck.userId === req.session.userId) {
    console.log("Updating");
    Decks.update(
      {
        deckName: deckName,
        colors: deckcolor,
        format: deckFormat,
      },
      { where: { id: id } }
    );

    res.send(updateDeck);
  } else {
    console.log("Did not Finished /api/update-deck");
    d;
    return res.send({
      message: "Failed to update",
      success: false,
    });
  }

  // Decks.update(updateDeck, { id, deckName, deckcolor, deckFormat });
});

// Requests related to managing Cards

app.get("/api/cardList/:id", async (req, res) => {
  const { id } = req.params;
  req.session.deckId = +id;
  const deckList = await CardList.findAll({ where: { deckId: id } });
  const allCards = await CardStore.findAll({
    include: {
      model: CardList,
      select: ["cardCount"],
    },
  });
  // Gets the list of names
  const newCard = deckList.map((names) => {
    return names.cardName;
  });

  // creates a new arry with all the cards in decklist with all of the information needed
  let newCardList = allCards.filter((newName) =>
    newCard.includes(newName.name)
  );

  res.send(newCardList);
});


app.get("/api/card-name/:name", async (req, res) => {
  const { name } = req.params;
  const card = await CardStore.findOne({ where: { name: name } });
  if (!card) {
    console.error(`There is no card with the name ${name}`)
    return res.send({ success: false })
  } else {
    return res.send({ card, success: true});
  }
});

app.post("/api/add-card", async (req, res) => {
  const deckId = req.session.deckId
  if (req.session.userId) {
    console.log(req.session)
    console.log(deckId)
    const newCard = await CardList.create({
      deckId: deckId,
      cardId: 2,
      cardName: "Aetherize",
      cardCount: 1
    });


    console.log("Finished /api/add-deck");
    return res.send({
      success: true,
    });
  } else {
    console.log("Finished /api/add-deck");
    return res.send({
      success: false,
    });
  }
});

app.post("/api/delete-card", async (req, res) => {
  const { id } = req.body;
  const deck = await CardList.findOne({ where: { id: id } });
  console.log(deck)
  console.log("userId: ", deck.deckId, "session Id: ", req.session.deckId)
  if (deck.deckId === req.session.deckId) {
    console.log("Finished /api/delete-card");
    CardList.destroy({ where: { id: id } });
    return res.send({
      success: true,
    });
  } else {
    console.log("Finished /api/delete-card");
    return res.send({
      message: "Failed to delete",
      success: false,
    });
  }
});

// Requests related to managing Users

app.get("/api/getUsers", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get("/api/session-check", async (req, res) => {
  if (req.session.userId) {
    console.log("Finished /api/session-check");
    return res.send({
      success: true,
      logged_in: true,
      userId: req.session.userId,
      deckId: +req.session.deckId,
    });
  } else {
    console.log("Finished /api/session-check");
    return res.send({
      message: "no user logged in",
      success: false,
    });
  }
});

app.post("/api/auth", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user && bcryptjs.compareSync(password, user.password)) {
    req.session.userId = user.id;
    // user.logged_in = true
    res.json({ success: true, logged_in: true });
  } else {
    res.json({ success: false, logged_in: false });
  }

  console.log("Finished /api/auth");
});

app.post("/api/logout", (req, res) => {
  if (!req.session.userId) {
    res.status(401).json({ error: "Unauthorized" });
    console.log("Logout didn't work");
    console.log("req.session.userId: ", req.session.userId);
  } else {
    req.session.destroy();
    res.json({ success: true, logged_in: false });
  }
  console.log("Finished /api/logout");
});

app.post("/api/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (await User.findOne({ where: { email: email } })) {
    console.log("Finished /api/register");
    return res.send({
      message: "email already exists",
      success: false,
    });
  }

  const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

  const newUser = await User.create({
    email: email,
    password: hashedPassword,
    logged_in: false,
    user_token: 99,
    token_experation: "Temp",
  });

  req.session.userId = newUser.id;

  console.log("Finished /api/register");

  return res.send({
    success: true,
    userId: req.session.userId,
  });
});
