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
                console.log("Email already in database");
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

app.post("/login", async (req, res) => {
    const {logemail, logpassword} = req.body;
    try{
        await db.query("SELECT email, password FROM user_data WHERE email = ?", logemail, (error, data) => {
            if(error){
                res.json({status: error});
            }
            if(data.length > 0){
                if(data[0].email === logemail && data[0].password !== logpassword){
                    res.json({status: "Incorrect password"});
                }
                else if(data[0].email === logemail && data[0].password === logpassword){
                    res.json({status: "User logged"});
                }
            }
            else{
                res.json({status: "There is no user record with that email"});
            }
        })
    }
    catch(error){
        console.log(error);
    }
})