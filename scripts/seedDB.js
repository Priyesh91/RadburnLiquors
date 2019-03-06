const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/radburn"
);

const dealsSeed = [
  {
    "id": 1,
    "name": "Collier Creek Cabernet Sauvignon",
    "image": "https://via.placeholder.com/150",
    "type": "Red Wine",
    "price": "$9.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$12.99"
  },
  {
    "id": 2,
    "name": "Collier Creek Pinot Noir",
    "image": "https://via.placeholder.com/150",
    "type": "Red Wine",
    "price": "$9.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$12.99"
  },
  {
    "id": 3,
    "name": "Collier Creek Chardonnay",
    "image": "https://via.placeholder.com/150",
    "type": "White Wine",
    "price": "$9.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$12.99"
  },
  {
    "id": 4,
    "name": "J.Moreau & Fils Vouvray",
    "image": "https://via.placeholder.com/150",
    "type": "White Wine",
    "price": "$16.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$21.99"
  },
  {
    "id": 5,
    "name": "Jack Daniels",
    "image": "https://via.placeholder.com/150",
    "type": "Bourbon",
    "price": "$30.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$40.00"
  },
  {
    "id": 6,
    "name": "Bulleit Bourbon",
    "image": "https://via.placeholder.com/150",
    "type": "Bourbon",
    "price": "$34.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$42.99"
  },
  {
    "id": 7,
    "name": "Tito's Vodka",
    "image": "https://via.placeholder.com/150",
    "type": "Vodka",
    "price": "$24.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$29.99"
  },
  {
    "id": 8,
    "name": "The Macellan 12yr Double Cask",
    "image": "https://via.placeholder.com/150",
    "type": "Single Malt-Scotch",
    "price": "$63.99",
    "size": "750ml",
    "alc": "20%",
    "was": "$75.00"
  }
];

db.Deals
  .remove({})
  .then(() => db.Deals.collection.insertMany(dealsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
