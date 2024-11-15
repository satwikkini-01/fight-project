import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import AddFlight from './addFlight';
import GetFlight from './GetFlight';
import EditFlight from './EditFlight';

function HomePage() {
  const [flights, setFlights] = useState([]);

  // Fetch flights data when the component mounts
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/flights/');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };
    fetchFlights();
  }, []);

  const handleAddFlight = (newFlight) => {
    setFlights([...flights, newFlight]);
  };

  const handleUpdateFlight = async (updatedFlight) => {
    const updatedFlights = flights.map((flight) =>
      flight._id === updatedFlight._id ? updatedFlight : flight
    );
    setFlights(updatedFlights);
  };

  const handleDeleteFlight = async (flightId) => {
    try {
      await axios.delete(`http://localhost:3000/api/flights/${flightId}`);
      setFlights(flights.filter((flight) => flight._id !== flightId));
    } catch (error) {
      console.error('Error deleting flight:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-screen flex justify-center items-center p-6">
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Flight Management</h1>
        
        <nav className="flex justify-center space-x-6 mb-8">
          <Link to="/">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              View Flights
            </button>
          </Link>
          <Link to="/add-flight">
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
              Add Flight
            </button>
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<GetFlight flights={flights} onDeleteFlight={handleDeleteFlight} />}
          />
          <Route
            path="/add-flight"
            element={<AddFlight onAddFlight={handleAddFlight} />}
          />
          <Route
            path="/edit-flight/:id"
            element={<EditFlight flights={flights} onUpdateFlight={handleUpdateFlight} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
