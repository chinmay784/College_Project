require("dotenv").config();
const jwt = require("jsonwebtoken");
const ChatSave = require("../models/ChatSave");
const run = require("../geminiApi");




exports.geminiPrompt = async (req, res) => {
    try {
        // Extract token from headers
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ success: false, message: "Access Denied: No token provided" });
        }

        // Verify token
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;

        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ success: false, message: "Prompt is required" });
        }

        const userId = req.user.userId;

        // Call the Gemini API
        const response = await run(prompt);
        // Find existing user searches
        let usersearch = await ChatSave.findOne({ userId });

        if (!usersearch) {
            usersearch = new ChatSave({ userId, searches: [{ query: prompt, result: response }] });
        } else {
            usersearch.serches.unshift({ query: prompt, result: response });
        }

        await usersearch.save();

        return res.json({
            success: true,
            message: "Search saved successfully",
            response,
            usersearch,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};




exports.getAllchats = async (req, res) => {
    try {
       
        // Extract token from headers
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ success: false, message: "Access Denied: No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

        if (!decoded || !decoded.userId) {
            return res.status(401).json({ success: false, message: "Invalid token or userId missing" });
        }

        req.user = decoded;
        const userId = req.user.userId;


        // Find all saved searches for the user
        const userSearches = await ChatSave.findOne({ userId });

        if (!userSearches) {
            return res.status(404).json({ success: false, message: "No search history found" });
        }

        return res.json({
            success: true,
            message: "Search history retrieved successfully",
            searches: userSearches.serches, // Send only the searches array
        });



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
