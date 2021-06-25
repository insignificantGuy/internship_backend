const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
var server = require("http").createServer(app);
const cors = require("cors");


app.use(
  cors()
);

app.use(bodyParser.json()); 

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected."))
  .catch((err) => console.log(err));

const teacherRoute = require("./routes/teacher");
app.use("/api/teacher", teacherRoute);
/*app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/admin", adminRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/cart", cartRoute);
app.use("/api/seller", sellerRoute);
app.use("/api/notif", notifRoute);
app.use("/api/payment",paymentRoute);*/


server.listen(port, () => console.log(`Listening o port ${port}`));