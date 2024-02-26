const {mongoose} = require("mongoose");

const mongoDB = async () => {
    try {
        await mongoose.connect("mongodb://Neelava200:neelava123@ac-d6lo3kg-shard-00-00.t00imxj.mongodb.net:27017,ac-d6lo3kg-shard-00-01.t00imxj.mongodb.net:27017,ac-d6lo3kg-shard-00-02.t00imxj.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-6nhjwt-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true });
        console.log("Connected");

        // const food_item = mongoose.model("food_item", {
        //     // Define your schema here
        // });

      

        // const data = await food_item.find({}).maxTimeMS(30000);
        // console.log();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;



// const mongoose=require("mongoose") 

// // const DB_NAME=require("../constant")

// const connectDB = async()=>{
//     try{
//         console.log("mongodb://Neelava:neelava123@ac-d6lo3kg-shard-00-00.t00imxj.mongodb.net:27017,ac-d6lo3kg-shard-00-01.t00imxj.mongodb.net:27017,ac-d6lo3kg-shard-00-02.t00imxj.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-6nhjwt-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");
//         const connectionInstance= await mongoose.connect
//         (`mongodb://Neelava:neelava123@ac-d6lo3kg-shard-00-00.t00imxj.mongodb.net:27017,ac-d6lo3kg-shard-00-01.t00imxj.mongodb.net:27017,ac-d6lo3kg-shard-00-02.t00imxj.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-6nhjwt-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0${"backend"}`)
//         console.log(`mongoDB connected  !! DB Host:${connectionInstance.connection.host}`)
//     }
//     catch(error){
//         console.log("MONGODB connection error", error)
//         process.exit(1)
//     }
// };

// module.exports = { connectDB };