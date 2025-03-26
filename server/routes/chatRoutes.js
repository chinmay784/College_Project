const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { geminiPrompt, getAllchats } = require("../controllers/chatController");
const router = express.Router();


router.post("/search", authMiddleware, geminiPrompt);
router.get("/allsearch", getAllchats)

module.exports = router;


// http://localhost:4000/api/chat/search  (In headers you have to give Authorization: your_token)
// http://localhost:4000/api/chat/allsearch