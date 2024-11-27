
# 📇 Contact Management System

A modern contact management application built with **React**, **Redux**, and **Tailwind CSS**, designed for efficient contact organization and management with a sleek, user-friendly interface.

---

## 📖 Table of Contents
- [📖 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📂 Project Structure](#-project-structure)
- [📁 Directory Breakdown](#-directory-breakdown)
- [🔧 Redux Store](#-redux-store)
- [📝 Pages](#-pages)
- [🧩 Components](#-components)
- [🎨 Styles](#-styles)
- [🌐 Public Assets](#-public-assets)
- [🚀 Getting Started](#-getting-started)
- [🎥 Demo and Screenshots](#-demo-and-screenshots)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 📖 Project Overview

The **Contact Management System** is a responsive web application that allows users to:
- Add, view, and manage their contacts.
- Securely log in and register accounts.
- Enjoy a visually appealing and modern UI built with **Tailwind CSS**.

The app is powered by **React** for frontend development, **Redux** for state management, and **React Router DOM** for seamless navigation.

---

## ✨ Features
✔️ User Authentication (Login/Register)  
✔️ Add, View, and Manage Contacts  
✔️ Store detailed contact information (Name, Email, Phone, Address)  
✔️ Responsive and mobile-friendly design  
✔️ Modern UI with **Tailwind CSS**  
✔️ Protected Routes for secure access  
✔️ Real-time Form Validation  

---

## 🛠️ Tech Stack
| Technology       | Description                    |
|-------------------|--------------------------------|
| **React**         | Frontend framework            |
| **Tailwind CSS**  | Utility-first CSS framework   |
| **Redux**         | State management              |
| **React Router**  | Client-side routing           |
| **Vite**          | Development build tool        |

---

## 📂 Project Structure

```bash
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page-level components
│   ├── redux/           # Redux store and slices
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
├── public/
│   └── index.html       # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
```

---

## 📁 Directory Breakdown

### **Source Directory (`src`)**
- **`pages/`**: Contains page-level components (e.g., Home, Login, Register, Contacts).  
- **`components/`**: Contains reusable UI components (e.g., Navbar, ContactBox).  
- **`redux/`**: Manages global state with Redux slices (e.g., \`authSlice.js\`, \`contactSlice.js\`).  

### **Public Directory (`public`)**
- Contains assets accessible to the browser, including the \`index.html\` template.

---

## 🔧 Redux Store
The app uses **Redux Toolkit** for state management:
- **\`store.js\`**: Configures the Redux store.  
- **Slices**:
  - \`authSlice.js\`: Manages authentication state (e.g., login/logout).  
  - \`contactSlice.js\`: Manages contact-related state (e.g., contact list, add/remove contacts).  

---

## 📝 Pages
- **Home.jsx**: Homepage component (if applicable).  
- **Login.jsx**: Login page for user authentication.  
- **Register.jsx**: Registration page for new users.  
- **Contacts.jsx**: Displays the list of user contacts.  
- **AddContact.jsx**: Form page for adding a new contact.

---

## 🧩 Components
- **Navbar.jsx**: A responsive and reusable navigation bar.  
- **ContactBox.jsx**: Displays individual contact details in an organized layout.

---

## 🎨 Styles
- **\`App.css\`**: Global styles for the app.  
- **\`index.css\`**: Tailwind CSS utilities and base styles.

---

## 🌐 Public Assets
- **\`index.html\`**: The main HTML file for the app.  
- Other static files (e.g., icons, logos) can be placed here.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14+)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/LoordhuJeyakumar/Contact-Manager-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Contact-Manager-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Development
- Run the project locally with hot-reloading enabled.  
- Access the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## 🎥 Demo and Screenshots

### Home Page

![Home Page](https://via.placeholder.com/800x400?text=Login+Page)

### Login Page
![Login Page](https://via.placeholder.com/800x400?text=Login+Page)

### Contact List Page
![Contact List](https://via.placeholder.com/800x400?text=Contact+List)

---

## 🤝 Contributing
Contributions are welcome! Here's how you can help:  
1. Fork the repository.  
2. Create a new branch for your feature/bugfix.  
3. Submit a pull request with detailed changes.

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE.md) file for more details.

---

## 📬 Contact & Support

### Project Maintainer
- **Name**: Loordhu Jeyakumar
- **Email**: loordhujeyakumar@gmail.com
- **LinkedIn**: [linkedin.com/in/loordhujeyakumar](https://linkedin.com/in/loordhujeyakumar)
- **GitHub**: [@loordhujeyakumar](https://github.com/loordhujeyakumar)

### Repository
- **GitHub**: [Contact-Management-System](https://github.com/LoordhuJeyakumar/Contact-Manager-frontend)
- **Issues**: [Report a Bug](https://github.com/LoordhuJeyakumar/Contact-Manager-frontend/issues)
- **Discussions**: [Join the conversation](https://github.com/LoordhuJeyakumar/Contact-Manager-frontend/discussions)

---
<div align="center">
    Made with ❤️ by Loordhu Jeyakumar<br>
    Copyright © 2024 Contact Management System
</div>
