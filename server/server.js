const express = require('express');
const cors = require('cors');
const apiRoute = require('./routes');
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(express.static("client"));
app.use(bodyParser.urlencoded({extended: false}))
app.use("/api", apiRoute);

app.listen(3000);