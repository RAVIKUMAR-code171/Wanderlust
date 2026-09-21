const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config({ path: require("path").join(__dirname, "../.env") });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
    return initDB();
  })
  .then(() => mongoose.connection.close())
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const listings = initData.data.map((obj) => ({
    ...obj,
    image: obj.image.url,
  }));
  await Listing.insertMany(listings);
  console.log("data was initialized");
};
