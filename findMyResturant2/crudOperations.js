// 1. CRUD Operations

// 1.1 - Display all documents in the restaurant collection:
db.restaurants.find({});

// 1.2 - Display all restaurants that have a specific cuisine
db.restaurants.find({ cuisine: "Cuisine2" });

// 1.3 - Display only kosher restaurants:
db.restaurants.find({ isKosherHalal: true });

// 1.4 - Display only specific city's restaurants:
db.restaurants.find({});

// 1.5 - Display a specific restaurant's address:
db.restaurants.find({});

// 1.6 - Display specific restaurant's coordinates:
db.restaurants.find({});

// 1.7 - Display all restaurants in ascending order by restaurant name:
db.restaurants.find().sort({ name: 1 });

// 1.8 - Display all restaurants in ascending order by city names:
db.restaurants.find().sort({ "address.city": 1 });

// 1.9 - Update a specific restaurant's name:
db.restaurants.updateOne(
  { name: "OldRestaurantName" },
  { $set: { name: "NewRestaurantName" } }
);

// 1.10 - Update a specific restaurant by adding a new review:
db.restaurants.updateOne(
  { name: "YourRestaurantName" },
  { $push: { reviews: { date: new Date("2024-01-02"), score: 4 } } }
);

// 1.11 - Update all restaurants to be kosher:
db.restaurants.updateMany({}, { $set: { isKosherHalal: true } });

// 1.12 - Delete a specific restaurant:
db.restaurants.deleteOne({ name: "YourRestaurantName" });

// 1.13 - Delete all restaurants:
db.restaurants.deleteMany({});

// 2. forEach Queries:

// 2.1 - Print all restaurant names:
db.restaurants.find({}, { name: 1, _id: 0 }).forEach(printjson);

// 2.2 - Print all restaurant cities:
db.restaurants.find({}, { "address.city": 1, _id: 0 }).forEach(printjson);

// 2.3 - Print all restaurant coordinates:
db.restaurants
  .find({}, { "address.coordinates": 1, _id: 0 })
  .forEach(printjson);

// 3. Advanced Queries:

// 3.1 - Query for restaurant names that start with a specific alphabet:
db.restaurants.find({ name: /^YourSpecificAlphabet/i });

// 3.2 - Query how many documents you have from the restaurant collection:
db.restaurants.find().count();

// 3.3 - Get restaurants that include reviews from a specific date:
db.restaurants.find({ "reviews.date": new Date("YourSpecificDate") });

// 4. Aggregation Operations:
// 4.1 - Display all restaurants' average score:
db.restaurants.aggregate([
  {
    $unwind: "$reviews",
  },
  {
    $group: {
      _id: "$_id",
      averageScore: { $avg: "$reviews.score" },
    },
  },
]);

// 4.2 - Display a specific restaurant's average score:
db.restaurants.aggregate([
  {
    $match: { name: "YourRestaurantName" },
  },
  {
    $unwind: "$reviews",
  },
  {
    $group: {
      _id: "$_id",
      averageScore: { $avg: "$reviews.score" },
    },
  },
]);
