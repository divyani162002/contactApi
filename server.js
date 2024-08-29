const express = require("express");
require("dotenv").config();
const cors =require("cors")
const app = express();



const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//contactus  route
const contactUsRoute =require("./Routes/contactUsRoute")
app.use("/contactUs",contactUsRoute)



app.get("/", (req, res) => {
  // console.log("server is running");
  res.send("Server is running");
});

//database connection
const connectDB = require("./DB_connection/configdb")
 connectDB();

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
})