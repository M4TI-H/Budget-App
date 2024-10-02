const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql")

app.use(cors())
app.use(express.json())

app.listen(8080, () => {
    console.log("Server is running on port 8080.")
})

//Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    pass: "",
    database: "PennyTracker"
})

app.post("/register", async (req, res) => {
    const {email, password} = req.body;
    const values = [email, password];
    try{
        await db.query("SELECT email FROM user_data WHERE email = ?", email, (error, data) => {
            if(error){
                res.json({status: error});
            }
            if(data.length > 0){
                res.json({status: "Email already in database"});
            }
            else{
                db.query("INSERT INTO user_data (`email`, `password`) VALUES (?)", [values]);
            }
        })
    }
    catch(error){
        console.log(error);
    }
})