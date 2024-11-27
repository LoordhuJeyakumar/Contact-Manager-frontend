# Contact Management System 

A modern contact management application built with React, Tailwind CSS, and Redux for efficient contact organization and management.


## Table of Contents

* [Project Overview](#project-overview)
* [Directory Structure](#directory-structure)
* [Files and Descriptions](#files-and-descriptions)
* [Redux Store](#redux-store)
* [Redux Slices](#redux-slices)
* [Pages](#pages)
* [Components](#components)
* [Styles](#styles)
* [Public Assets](#public-assets)
* [Getting Started](#getting-started)
* [Contributing](#contributing)
* [License](#license)

## Project Overview
Contact Management System is a web application that provides a user-friendly interface for managing contacts. It includes user authentication and contact management features with a clean, modern UI built using Tailwind CSS.


This project is a React-based web application that utilizes Redux for state management and React Router for client-side routing. The application is structured into several directories, each containing specific files and components.

## Features

- User Authentication (Login/Register)
- Contact Management
  - Add new contacts
  - View contacts
  - Store contact details (name, email, phone, address)
- Responsive Design
- Modern UI with Tailwind CSS
- Protected Routes
- Form Validation

## Tech Stack

- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **State Management:** Redux (implied from structure)

## Project Structure
```bash
├── src/
│ ├── pages/
│ │ ├── AddContact.jsx # Add new contact page
│ │ ├── Login.jsx # User login page
│ │ └── Register.jsx # User registration page
│ └── main.jsx # Application entry point
├── public/
│ └── index.html # Main HTML template
└── tailwind.config.js # Tailwind CSS configuration
```


## Directory Structure

* `src`: The root directory of the project, containing all source code.
* `src/redux`: Directory containing Redux store configuration and reducers.
* `src/redux/slices`: Directory containing Redux slice reducers.
* `src/pages`: Directory containing page-level components.
* `src/components`: Directory containing reusable React components.
* `public`: Directory containing public assets, such as the index.html file.

## Files and Descriptions

* `src/App.jsx`: The main application component, responsible for rendering the entire app.
* `src/App.css`: Global CSS styles for the application.
* `src/index.css`: Global CSS styles for the application.
* `src/main.jsx`: The entry point of the application, responsible for rendering the app to the DOM.
* `src/redux/store.js`: Redux store configuration.
* `src/redux/slices/authSlice.js`: Redux slice reducer for authentication-related state.
* `src/redux/slices/contactSlice.js`: Redux slice reducer for contact-related state.
* `src/pages/Home.jsx`: Page-level component for the home page.
* `src/pages/Login.jsx`: Page-level component for the login page.
* `src/pages/Register.jsx`: Page-level component for the register page.
* `src/pages/Contacts.jsx`: Page-level component for the contacts page.
* `src/pages/AddContact.jsx`: Page-level component for adding new contacts.
* `src/components/Navbar.jsx`: A reusable navigation bar component.
* `src/components/ContactBox.jsx`: A reusable contact box component.
* `public/index.html`: The main HTML file, served as the entry point of the application.

## Redux Store

* `store.js`: Redux store configuration.

## Redux Slices

* `authSlice.js`: Redux slice reducer for authentication-related state.
* `contactSlice.js`: Redux slice reducer for contact-related state.

## Pages

* `Home.jsx`: Page-level component for the home page.
* `Login.jsx`: Page-level component for the login page.
* `Register.jsx`: Page-level component for the register page.
* `Contacts.jsx`: Page-level component for the contacts page.
* `AddContact.jsx`: Page-level component for adding new contacts.

## Components

* `Navbar.jsx`: A reusable navigation bar component.
* `ContactBox.jsx`: A reusable contact box component.

## Styles

* `App.css`: Global CSS styles for the application.
* `index.css`: Global CSS styles for the application.

## Public Assets

* `index.html`: The main HTML file, served as the entry point of the application.

## Getting Started

1. Clone the repository: `git clone https://github.com/username/repository.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Contributing

Contributions are welcome! Please submit a pull request with a detailed description of the changes.

## License

This project is licensed under the MIT License. See LICENSE.md for details.