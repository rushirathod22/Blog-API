const express = require('express');
const cors = require("cors");
const postRoutes = require("./routes/post.routes");
require("./models/user.model");

const authRoutes = require("./routes/auth.routes")
 
const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req,res)=>{
    res.send("Server is running ");
});

app.post("/test", (req,res)=>{
    res.json({
        message:"Data received",
        data: req.body
    });
});
module.exports = app;