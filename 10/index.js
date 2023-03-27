const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    let data = {
        ime:req.params.ime ? req.params.ime: '';
        studenti: [
            {first_name: 'Goran', last_name: 'Goranosvki'},
            {first_name: 'Jorde', last_name: 'Jordevski'},
            {first_name: 'Martin', last_name: 'Martinovski'},
            {first_name: 'Petar', last_name: 'Petrovski'},
            {first_name: 'Zoran', last_name: 'Zoranovski'}
        ]
    };
    res.render('podatoci', data);

    app.get('/formular', (req, res) => {
        res.render = ('formulari'){

    // res.send('You have visited the home page');
});

app.listen(8080, (err) => {
    
    if(err) {
        return console.log(err);
    };
    console.log("Server started successfully...");
});
