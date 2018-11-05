var express = require('express');

var app = express();
console.log("Let's find out what app is", app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request,response) {
    response.render('cars');
});

app.get('/cats', function(request,response) {
    response.render('cats');
});

app.get('/cars/new', function(request,response) {
    response.render('form')
});

app.get('/first_cat', function(request,response) {
    var cats = [
        { name: 'kittens' },
        { age: 'kittens' },
        { favorite_food: 'kitten food'},
        { sleeping_spot: 'anywhere comfy'},
        { image: src='../images/cats.jpeg'}
    ];
    response.render('details', { cat: cats });
});

app.get('/second_cat', function(request, response) {
    var cats = [
        { name: 'Big Cat' },
        { age: '4' },
        { favorite_food: 'mice'},
        { sleeping_spot: 'where the mice are'},
        { image: src='../images/cat2.jpeg'}
    ];
    response.render('details', { cat: cats })
});

app.get('/third_cat', function(request, response) {
    var cats = [
        { name: 'Jumping Cat' },
        { age: '2' },
        { favorite_food: 'butterflies' },
        { sleeping_spot: 'the outdoors' },
        { image: src='../images/cat_jump.jpeg' }
    ];
    response.render('details', { cat: cats })
});

app.listen(8000, function () {
    console.log('listening on 8000');
});
