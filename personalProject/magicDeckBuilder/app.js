import express from "express";
import session from "express-session";
import ViteExpress from "vite-express";
import { User } from "./server/model.js";
import bcryptjs from 'bcryptjs'

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

app.get('/api/getUsers', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

app.get('/api/session-check', async (req,res) => {
    if(req.session.userId) {
        return res.send({
            success: true,
            logged_in: true,
            userId: req.session.userId
        })
    } else {
        return res.send({
            message: 'no user logged in',
            success: false
        })
    }
})

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
});

app.post("/api/logout", (req, res) => {
  if (!req.session.userId) {
    res.status(401).json({ error: "Unauthorized" });
    console.log("Logout didn't work")
    console.log("req.session.userId: ", req.session.userId)
  } else {
    req.session.destroy();
    res.json({ success: true, logged_in: false });
  }
});

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body
  if (await User.findOne({ where: { email: email} })) {
    return res.send({
        message: "email already exists",
        success: false
    })
  }

  const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))

  const newUser = await User.create({
    email: email,
    password: hashedPassword,
    logged_in: false,
    user_token: 99,
    token_experation: 'Temp'
  })

  req.session.userId = newUser.id

  return res.send({
    success: true,
    userId: req.session.userId
  })

});
