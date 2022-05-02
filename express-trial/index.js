const express = require("express");
const data = require("./data");

const app = express();
const routes = require("./routes/restaurants.routes");

app.use(express.json());
app.use("/restaurants", routes);





app.listen(3000, () => {
    console.log("Tudo indo!")
});