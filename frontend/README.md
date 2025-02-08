# 📝 Task Management

The **Task Management** is a full-stack task management system that allows users to **create, read, update, and delete (CRUD) tasks** while integrating **user authentication and profile management**. The application is designed to help users efficiently organize their tasks with **due dates, status tracking, and account security features**.

## 📌 Features

### **🔐 User Authentication & Profile Management**

✅ **Sign Up & Login** – Secure authentication using JWT or session-based login.  
✅ **Profile Update** – Users can modify their profile details.  
✅ **Password Recovery** – Supports **Forgot Password** and **Reset Password** functionalities.

### **📌 Tasks Management**

✅ **Create Tasks** – Users can add new tasks with a title, description, due date, and status.  
✅ **Read Tasks** – Users can view and filter their tasks.  
✅ **Update Tasks** – Users can edit task details and update status (e.g., "Pending", "Completed").  
✅ **Important Tasks** – Users can mark task as important .  
✅ **Delete Tasks** – Users can remove tasks they no longer need.

### **⚡ State Management & API Integration**

✅ **Redux Toolkit** – Efficiently manages the application’s state.  
✅ **RESTful API** – Communicates with the backend for authentication and task operations.

### **🎨 UI & Design**

✅ **Responsive Layout** – Mobile-friendly UI with a clean grid-based task display.  
✅ **Dark Mode Support(Dashboard)** – Enhances user experience with a theme toggle.

## 🏗️ Tech Stack

| **Technology**           | **Usage**                                |
| ------------------------ | ---------------------------------------- |
| **React.js**             | Frontend UI framework                    |
| **Tailwind CSS**         | Styling and responsive design            |
| **Redux Toolkit**        | State management                         |
| **Node.js & Express.js** | Backend API                              |
| **MongoDB**              | Database for storing user & task data    |
| **JWT (JSON Web Token)** | Secure authentication                    |
| **REST API**             | Communication between frontend & backend |

## 🛠️ Installation & Setup

### Frontend

1. Clone the repository:
   ```sh
   git clone https://github.com/shahriarabiddut/Task-Management.git
   ```
2. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
