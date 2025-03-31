const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const { DbConnect } = require("./dataBase/dbConnection");
const authRoute = require('./routes/authRoutes')
const chatRoute = require("./routes/chatRoutes")
dotenv.config(); // Load environment variables


const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());


DbConnect();

app.use("/api/auth", authRoute);
app.use("/api/chat",chatRoute)

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});