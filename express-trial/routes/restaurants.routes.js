
// const { application } = require("express");
const express = require("express");
const data = require("../data");

const router = express.Router();

// express.use(express.json());

router.get("/", (req, res) => {
    return res.status(200).json(data);
});

router.post("/addrestaurant", (req, res) => {
    console.log(req.body)
    data.push(req.body);

    return res.status(201).json({MSG: "Restaurante adicionado!"});
});

router.put("/editrestaurants/:id", (req, res) => {

    const index = data.findIndex(item => item.id === req.params.id);

    const { name, type, city, score } = req.body;


    data[index]["name"] = name ? name : data[index]["name"];
    data[index]["type"] = type ? type : data[index]["type"];
    data[index]["city"] = city ? city : data[index]["city"];
    data[index]["score"] = score ? score : data[index]["score"];

    // nome?nome:data[index]['name']

    return res.status(202).json({MSG: "Restaurante modificado!"});
});

router.delete("/deleterestaurants/:id", (req, res) => {
    const index = data.findIndex(item => item.id === req.params.id);

    data.splice(index, 1);
    
    return res.status(202).json({MSG: "Restaurante deletado!"});
})

module.exports = router;