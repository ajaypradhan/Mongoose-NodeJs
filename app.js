const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//schema for new collection

const fruitSchema = new mongoose.Schema({
    // name: String,
    // for validation
    name: {
        type: String,
        required: [true, 'Please check our data entry , no name found'],
    },
    // rating: Number,
    // for validation
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    // name: 'peaches',
    rating: 10,
    review: 'Peaches are awesome',
});

// fruit.save();

// const PersonSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });

// const Person = mongoose.model('Person', PersonSchema);

// const person = new Person({
//     name: 'John',
//     age: 37,
// });

// person.save();

// const kiwi = new Fruit({
//     name: 'Kiwi',
//     rating: 10,
//     review: 'The best fruit',
// });

// const orange = new Fruit({
//     name: 'Orange',
//     rating: 4,
//     review: 'Too sour',
// });

// const banana = new Fruit({
//     name: 'Banana',
//     rating: 9,
//     review: 'mast haa',
// });

//insert many

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully added to the DB');
//     }
// });

//find

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        // console.log(fruits);
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

//update

// Fruit.updateOne(
//     { _id: '61026221dd1eb51fcc5de9aa' },
//     { name: 'Peaches' },
//     function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Successfully update the document');
//         }
//     }
// );

//delete

// Fruit.deleteOne({ name: 'peaches' }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully deleted');
//     }
// });
