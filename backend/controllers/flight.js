const FlightModel = require("../models/flight");

const getAllFlights = async (req, res) => {
    try {
        const flightmodel = await FlightModel.find();
        res.status(200).json(flightmodel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFlightById = async (req, res) => {
    try {
        const id = req.params.id;
        const flightmodel = await FlightModel.findOne({ flight_id: id });
        if (!flightmodel)
            return res.status(404).json({ message: "Item not found" });
        res.status(200).json(flightmodel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const insertFlight = async (req, res) => {
    try {
        const flightmodel = new FlightModel(req.body);
        const savedItem = await flightmodel.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.log("Error: " + error);
        res.status(400).json({ message: error.message });
    }
};

const updateFlight = async (req, res) => {
    try {
        const updatedItem = await FlightModel.findOneAndUpdate(
            { flight_id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedItem)
            return res.status(404).json({ message: "Item not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteFlight = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedItem = await FlightModel.findOneAndDelete({
            flight_id: id,
        });
        if (!deletedItem)
            return res.status(404).json({ message: "Item not found" });
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        console.log("Error. " + error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    insertFlight,
    getAllFlights,
    getFlightById,
    updateFlight,
    deleteFlight,
};
