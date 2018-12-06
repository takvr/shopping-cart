var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title: 'Gothic Video Game',
    description:'Awesome game!!!',
    price: 10
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title: 'Minecraft Video Game',
    description:'Awesome game!!!',
    price: 20
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title: 'Spiderman Video Game',
    description:'Awesome game!!!',
    price: 30
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title: 'Warcraft Video Game',
    description:'Awesome game!!!',
    price: 15
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title: 'Lord of the rings Video Game',
    description:'Awesome game!!!',
    price: 45
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title: 'Need for Speed Video Game',
    description:'Awesome game!!!',
    price: 50
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length) {
          exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

