const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const { DbConnect } = require("./dataBase/dbConnection");
const authRoute = require('./routes/authRoutes')
const chatRoute = require("./routes/chatRoutes")
dotenv.config(); // Load environment variables
const path = require("path");


const app = express();

const _dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cors({ origin: "https://college-project-ecpj.onrender.com", credentials: true }));
app.use(cookieParser());


DbConnect();

app.use("/api/auth", authRoute);
app.use("/api/chat",chatRoute);


app.use(express.static(path.join(_dirname, "/React_Vc/dist")));
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(_dirname,"React_Vc","dist","index.html"))
})

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
