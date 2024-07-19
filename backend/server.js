const express =  require("express");
const cors = require("cors");

const stateList = require("./states");

const app = express();

const PORT = 3000;

app.get("/api/v1/states", (req, res) => {
    res.json(stateList);
})

app.listen(PORT, () =>{
    console.log(`app is listening on ${PORT}`)
})