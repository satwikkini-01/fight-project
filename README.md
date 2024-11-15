<img width="1344" alt="Screenshot 2024-11-15 at 3 35 48 PM" src="https://github.com/user-attachments/assets/fb501f76-09b0-4969-88b5-2d682e329620"># Flight Search App

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

### Public Interface
- **Flight List:** Shows all available flights.
- **Search:** Users can apply filters to find specific flights.

### Admin Portal
- **Flight Management:** Admins can add, edit, delete, and search flights.

## CRUD Operation Screenshots
Add screenshots to demonstrate the following:
1. **Insert Flight:** Form to add a new flight.
2. **View Flights:** Display list of all flights in the database.
3. **Edit Flight:** Form to update flight details.
4. **Delete Flight:** Confirmation to remove a flight.

## Screenshots

<img width="1344" alt="Screenshot 2024-11-15 at 3 35 48 PM" src="https://github.com/user-attachments/assets/2a5045cd-dc27-4ae5-bb5c-d7c635f81765">

<img width="740" alt="Screenshot 2024-11-15 at 3 35 54 PM" src="https://github.com/user-attachments/assets/c9ad96c4-1dee-4941-a2ed-25d99a31ee9f">

<img width="762" alt="Screenshot 2024-11-15 at 3 36 00 PM" src="https://github.com/user-attachments/assets/71ce3da1-ae11-4641-8dfb-24f0f945c11e">
