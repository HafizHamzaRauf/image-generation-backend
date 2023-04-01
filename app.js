const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();

const imageRoutes = require("./routes/images");
// *************   REQUEST  PARSING MIDDLEWARE ****************//
app.use(cors());
app.use(bodyParser.json());

//**************    MAIN MIDDLEWARES **********************/
app.use("/images", imageRoutes);
app.use("/", () => {
  console.log("image generator");
});

// Listen on enviroment variable PORT or 3000
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
