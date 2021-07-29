const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//schema for new collection

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 7,
    review: 'Pretty Solid as fruit',
});

// fruit.save();

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model('Person', PersonSchema);

const person = new Person({
    name: 'John',
    age: 37,
});

// person.save();

const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 10,
    review: 'The best fruit',
});

const orange = new Fruit({
    name: 'Orange',
    rating: 4,
    review: 'Too sour',
});

const banana = new Fruit({
    name: 'Banana',
    rating: 9,
    review: 'mast haa',
});

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully added to the DB');
//     }
// });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits);
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});
