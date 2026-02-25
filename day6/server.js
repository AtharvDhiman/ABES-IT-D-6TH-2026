import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;
//login and regiter
app.get("/login", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
