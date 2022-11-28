//IMPORT FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

//IMPORT FROM OTHER FILES
const authRouter = require("./routes/auth");

//INITialization
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://asmir:asmir123@cluster0.t4wxinn.mongodb.net/?retryWrites=true&w=majority";

//midlleware
app.use(express.json());
app.use(authRouter);

//Connections
mongoose
  .connect(DB)
  .then(() => {
    //dodajemo .then jer je u pitanju 'promise'
    console.log("Connection Succefull!");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`); //$ znak je kao +PORT iza navodnika
});
