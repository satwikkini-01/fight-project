# Flight Search App

## Tech Stack
- **Frontend:** React, Bootstrap
- **Backend:** Express, MongoDB

## Description
This Flight Search App allows users to search for flights between different locations with various filters such as airline, source, destination, fare, and duration. It provides an admin portal for managing flight details and a public interface for users to search and view flight information.

## Features

### Actors
- **Admin:** Manages flight information (add, edit, delete, view).
- **User:** Searches and views flights based on multiple criteria.

### Admin Operations
- Login/Logout
- CRUD (Create, Read, Update, Delete) operations for flights
- View all flights

### User Operations
- View all flights
- Search flights by:
  - **Airline**
  - **Source Location**
  - **Destination**
  - **Fare Range**
  - **Duration**

### MongoDB Collections
1. **Flights Collection:**
   - `id`: Unique identifier for the flight
   - `airline`: Name of the airline
   - `source`: Departure location
   - `destination`: Arrival location
   - `fare`: Ticket price
   - `duration`: Flight duration

2. **Admins Collection:**
   - `id`: Unique identifier for the admin
   - `name`: Admin's name
   - `password`: Admin's password

## Pages

### Public Interface (flightsearch.com)
- **Flight List:** Shows all available flights.
- **Search:** Users can apply filters to find specific flights.

### Admin Portal (flightsearch.com/admin)
- **Admin Login**
- **Flight Management:** Admins can add, edit, delete, and search flights.

## CRUD Operation Screenshots
Add screenshots to demonstrate the following:
1. **Insert Flight:** Form to add a new flight.
2. **View Flights:** Display list of all flights in the database.
3. **Edit Flight:** Form to update flight details.
4. **Delete Flight:** Confirmation to remove a flight.

Each screenshot should include a brief description of the functionality.

---

This `README.md` provides an overview of the app's purpose, features, and database structure, focusing on CRUD operations for easy reference.
