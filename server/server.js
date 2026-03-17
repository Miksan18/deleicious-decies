const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Delecious Decies API Running 🍽️");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});


const mongoose = require("mongoose");


app.use(express.json());

app.use("/api/menu", require("./routes/menu"));
const orderRoutes = require("./routes/order");
app.use("/api/order", orderRoutes);



/* DATABASE CONNECTION */

mongoose.connect("mongodb://127.0.0.1:27017/delecious")
.then(()=>console.log("✅ MongoDB Connected"))
.catch(err=>console.log(err));

/* TEST ROUTE */

app.get("/", (req,res)=>{
res.send("Delecious Decies API Running 🍽️");
});

console.log("🚀 Server running on port 5000");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ imageUrl: req.file.filename });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});