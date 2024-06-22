const { mongoose } = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://Neelava200:neelava123@ac-d6lo3kg-shard-00-00.t00imxj.mongodb.net:27017,ac-d6lo3kg-shard-00-01.t00imxj.mongodb.net:27017,ac-d6lo3kg-shard-00-02.t00imxj.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-6nhjwt-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true }
    );
    console.log("Connected");

    try {
        const fetch_data = await mongoose.connection.db.collection("food_items");
        const data = await fetch_data.find({}).toArray();
        global.food_items = data;
        // console.log("Data fetched:", global.food_items);
      } catch (err) { 
        console.log("Error fetching data:", err);
      }

      try {
        const fetch_data = await mongoose.connection.db.collection("foodCategory");
        const data = await fetch_data.find({}).toArray();
        global.foodCategory = data;
        console.log("Data fetched:", global.foodCategory);
      } catch (err) { 
        console.log("Error fetching data:", err);
      }
      
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
