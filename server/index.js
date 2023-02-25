const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const houseController = require('./controller.js')





app.listen(4004, () => console.log('Server is running on port 4004'));