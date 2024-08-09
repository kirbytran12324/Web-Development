import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user : "postgres",
    password : "Kirbymoto0",
    host : "localhost",
    port : 5432,
    database : "postgres"
});

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const checkUser = await db.query(`SELECT * FROM public.users WHERE email = '${email}'`);
    if (checkUser.rows.length === 0 && email && password) {
      const query = `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`;
        await db.query(query);
        res.send("User registered successfully!");
        res.render("secrets.ejs")
    } else {
        res.send("Invalid email or password.");
    }

});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const checkUser = await db.query(`SELECT * FROM public.users WHERE email = '${username}' AND password = '${password}'`);
    if (username && password && checkUser.rows.length > 0) {
        res.send("User logged in successfully!");
        res.render("secrets.ejs")
    } else {
        res.send("Invalid username or password.");
    }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
