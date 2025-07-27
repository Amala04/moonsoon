const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://amalabalu04:Hiamala23!@cluster0.u9jtfom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
