import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

app.get("/hobbies", (_req, res) => {
  res.send("I cycle, go boating, and play guitar.");
});

app.get("/skills", (_req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

app.get("/api/profile", (_req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"]
  });
});

const PORT = 3000;
const listener = app.listen(PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});