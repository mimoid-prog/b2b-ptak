const express = require("express");
const mongoose = require("mongoose");
const expressJWT = require("express-jwt");

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:3000", "https://mimoid-prog.usermd.net"],
};

const router = express.Router();
router.use(cors(corsOptions));

const Visitor = require("../models/visitor");
const Exhibitor = require("../models/exhibitor");
const Company = require("../models/company");

router.get(
  "/fetch-collections",
  expressJWT({
    secret: process.env.PTAK_DEV_SECRET,
    algorithms: ["HS256"],
    credentialsRequired: false,
  }),
  (req, res) => {
    if (!req.user.name) return res.sendStatus(401);
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      const collections = names.map((name) => name.name);
      res.json({ collections });
    });
  },
);

router.post(
  "/fetch-documents",
  expressJWT({
    secret: process.env.PTAK_DEV_SECRET,
    algorithms: ["HS256"],
    credentialsRequired: false,
  }),
  (req, res) => {
    const collection = req.body.collection;

    if (collection === "visitors") {
      Visitor.find({})
        .then((visitors) => {
          const newVisitors = visitors.map((visitor) => ({
            _id: visitor._id,
            company: visitor.company,
            name: visitor.name,
            email: visitor.email,
            phone: visitor.phone,
            nip: visitor.nip,
            createdAt: visitor.createdAt,
          }));

          const columns = [
            "ID",
            "Firma",
            "Imię i nazwisko",
            "Email",
            "Telefon",
            "NIP",
            "Dodano",
          ];

          console.log(newVisitors);

          res.json({ columns, documents: newVisitors });
        })
        .catch((err) => {
          res.status(400).json({ message: "Wystąpił błąd" });
        });
    } else {
      res.status(400).json({ message: "Brak takiej kolekcji" });
    }
  },
);

module.exports = router;
