var express = require('express');
var ejs = require('ejs');
const bodyParser = require('body-parser')
var cors = require('cors')
var app = express();
var port = 8080;
var path = require('path')

app.set("view engine", 'ejs');
app.use(cors())
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

const data1 = require('/home/v-labsai-vishwasm/Desktop/osha/2016.json');
// console.log(data1)
  

app.get("/", (req, res) => {
    res.header("Content-Type",'application/json');
    // res.sendFile(path.join(__dirname, './2016.json'));
    res.render("Main", {
        path: data1,
    });
    // res.status(200).json(data1)


});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})