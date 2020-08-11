require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const DBUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

const visitors = require("./routes/visitors");
const exhibitors = require("./routes/exhibitors");
const companies = require("./routes/companies");
const ptakDev = require("./routes/ptakDev");

app.use("/api", visitors);
app.use("/api", exhibitors);
app.use("/api", companies);
app.use("/api/ptak-dev", ptakDev);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
