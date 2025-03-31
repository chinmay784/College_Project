const MonGoose = require("mongoose")
require("dotenv").config()

exports.DbConnect = async () => {
    console.log(process.env.MONGO_URI)
    await MonGoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
        .catch((err) => {
            console.log(err)
            console.log("error")
        })
}