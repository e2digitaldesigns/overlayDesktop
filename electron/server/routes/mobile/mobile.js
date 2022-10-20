const express = require("express");
const router = express.Router();
const storage = require("electron-json-storage");

router.get("/start", async (req, res) => {
  try {
    storage.get("md", (error, data) => {
      if (error) throw error;

      const db = "createMobileProfile(data);";

      res.json(db);
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/actions", async (req, res) => {
  const io = req.app.get("socketio");
  const mainWindow = req.app.get("mainWindow");
  res.send("hello");
});

module.exports = router;
