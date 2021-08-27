const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded())

const fs = require('fs');
var MYdata = fs.readFileSync('data.json');
var data = JSON.parse(MYdata);

app.get('/', function(req, res) {
    res.render('index', { data })});

app.post('/add', function(req, res){
    let total = req.body.total;
    let date_ob = new Date();

    let day = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let date = (day + "/" + month + "/" + year);

    let myjson = {
        "total": req.body.total,
        "date": date, 
    }

    data.push(myjson);

    let js = JSON.stringify(data, null, 2);

    fs.writeFileSync("data.json",js);
    res.redirect('/');

})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
