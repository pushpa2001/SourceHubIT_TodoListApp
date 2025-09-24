# SourceHubIT_TodoListApp
A full-stack To-Do List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) with features to add, update, delete, and mark tasks as completed.
# To-Do List App

A full-stack **MERN** (MongoDB, Express, React, Node.js) To-Do List application where users can **add, update, delete, and view tasks**.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Persistent storage with MongoDB
- RESTful API backend with Express & Node.js
- Responsive React frontend

## Project Structure

│
├─ Server
│   ├─ index.js       <-- your Express backend file
│   └─ Models
│       └─ Todo.js
│
├─ todolist-Frontend    # React frontend
        |--public
        |   ├─ vite.config.js
        └─ src
            ├─ assets
        └─ App.css
        └─ App.jsx
        └─ index.jsx
        └─ main.jsx
        └─index.html
        └─ package-lock.json
        └─package.json

│─todolist
     |--public
        |   ├─ vite.config.js
        └─ src
            ├─ assets
        └─ App.css
        └─ App.jsx
        └─ index.jsx
        └─ main.jsx
        └─index.html
        └─ package-lock.json
        └─package.json


## Installation

### Backend

```bash
cd Server
npm install
node index.js

**Usage**

Start MongoDB (mongod in terminal or MongoDB service).

Run the backend server.

Run the frontend React app.

Open the app in your browser at http://localhost:3000

cd todolist
npm install
npm start
   


        
