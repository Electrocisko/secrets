import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get('/error', (req, res) => {
const message = req.session.messages;
req.session.destroy();
  res.json({
    status: "error",
    message
  })
})

export default router;
