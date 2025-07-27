const express = require("express");
const cors = require("cors");
const BlogModel = require("./model");
require('./connection')
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here

//Write your POST API here

app.post('/add',async(req,res)=>{
    await BlogModel(req.body).save()
    res.json({ message: "Blog added!" });
})

app.get("/", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/delete/:id',async(req,res)=>{
    await BlogModel.findByIdAndDelete(req.params.id)
    res.send("deleted")
})

app.put('/update/:id',async(req,res)=>{
    var a=await BlogModel.findByIdAndUpdate(req.params.id,req.body)
    res.send("updated successfully")
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
