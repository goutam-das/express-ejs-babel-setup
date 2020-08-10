import express from 'express';
import {resolve} from 'path';

const {
    PORT = 5555
} = process.env;

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, 'views'));

// index page 
app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});