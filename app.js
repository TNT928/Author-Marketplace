const express= require("express")
const app= express()
const mongoose= require("mongoose")
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost:27017/Author_Market", {useNewUrlParser: true});
app.set("view engine", "ejs");


app.get("/", (req, res, err)=>{
    
    res.render("home")
})

app.get("/editors", (req, res)=>{
    res.render("editors")
})

app.get("/covers", (req, res)=>{
    res.render("covers")
})

app.get("/isbns", (req, res)=>{
    res.render("isbn")
})

app.get("/about",(req, res)=>{
    res.render("about")
})




app.listen(process.env.PORT, process.env.IP,()=>{
    console.log("SERVER IS STARTED")
})