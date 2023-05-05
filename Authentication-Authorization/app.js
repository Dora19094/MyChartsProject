require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./db");
const passport = require("passport");
require("./passportConfig")(passport);

db.connect();


app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
        res.redirect("/profile/");
    }
);


app.get("/profile", (req, res) => {
    console.log(req);
    res.send("Welcome");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});