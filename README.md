


## MERN Street Food

MERN Street Food is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project allows users to sign up, log in, and post blogs related to local street food and much more. 

## Features

- User Authentication (Sign Up, Login)
- Create, Read, Delete Blogs
- Responsive UI

## Tech Stack

- **Frontend:** React.js, Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **State Management:** Redux

## Installation

### Prerequisites

- Node.js
- MongoDB
- Git

### Clone the repository

```bash
git clone https://github.com/yourusername/MERN-Street-Food.git
cd MERN-Street-Food
```

### Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
MONGO_URI=your_mongo_db_connection_string
PORT=5000
```

### Run the Application

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd frontend
npm start
```

## API Endpoints

### User Routes

- **POST** `/user/signup`: User Sign Up
- **POST** `/user/login`: User Login

### Blog Routes

- **GET** `/blogs`: Get all blogs
- **POST** `/blogs/add`: Add a new blog
- **GET** `/blogs/:id`: Get a single blog by ID
- **DELETE** `/blogs/:id`: Delete a blog by ID

## Folder Structure

```
MERN-Street-Food/
├── backend/
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── blogController.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── blogModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── blogRoutes.js
│   ├── app.js
│   ├── server.js
│   ├── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth.js
│   │   │   ├── AddBlog.js
│   │   ├── store/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── package.json
├── README.md
```

## Usage

1. Sign up for a new account or log in with existing credentials.
2. Post new blogs related to street food.
3. View all posted blogs.
4. Delete blogs (if you are the author).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.


```


