const express = require("express");

const router = express.Router();

const {
    getAllFlights,
    getFlightById,
    insertFlight,
    updateFlight,
    deleteFlight,
} = require("../controllers/flight");

router.get("/", getAllFlights);
router.get("/:id", getFlightById);

router.post("/", insertFlight);

router.put("/:id", updateFlight);

router.delete("/:id", deleteFlight);

module.exports = router;
