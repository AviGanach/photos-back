console.log("avi");
const cors = require('cors')
const express = require('express');
const router = require("./getRoutes");

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);


app.listen(3004, () => {
  console.log('Server is listening on port 3004');
});

