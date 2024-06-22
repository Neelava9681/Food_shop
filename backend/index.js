const mongodb = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");

const port = 5001;
mongodb();

// app.use((req, res, next)=>{
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })

app.use(
  cors({
    origin: "https://foodshop-frontend.vercel.app",
  })
);

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
