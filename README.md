# 📝 Notes API

📚 A robust RESTful API for managing notes, built with Node.js and Express. This API provides comprehensive CRUD operations with proper validation and a clean architecture. Ideal for personal note-taking applications, task management systems, or any platform requiring note storage and retrieval.

## 🔑 Key Features  
- **Full CRUD operations** (Create, Read, Update, Delete) for notes  
- **Express-validator middleware** for robust input validation  
- **Clean architecture** with MVC pattern  
- RESTful endpoints with proper HTTP status codes  
- In-memory data persistence (easily extendable to databases)  
- Error handling middleware  
- Organized route management  

## 🛠 Tech Stack  
- Node.js  
- Express.js  
- Express-validator  
- REST API principles  

## 📁 Project Structure  
```
/
├── app.js                         # Main application entry point
├── config/
│   └── db.js                      # Database connection setup
├── models/
│   ├── User.js                    # User model
│   ├── Note.js                    # Note model
├── routes/
│   ├── users.route.js             # User-related endpoints and Authentication routes
│   ├── notes.route.js             # Note-related endpoints
├── controllers/
│   ├── users.controller.js        # Business logic for users and Auth handlers
│   ├── notes.controller.js        # Business logic for notes
├── middlewares/
│   ├── requireAuth.js             # Authentication middleware
└── node_modules/
```

## 🌐 API Endpoints  

### Users
| Method | Endpoint                | Description                  |
|--------|-------------------------|------------------------------|
| POST   | /api/v1/users/register  | Register a new user          |
| POST   | /api/v1/users/login     | Login an existing user       |
| POST   | /api/v1/users/logout    | Logout a user                |

### Notes

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | /api/v1/notes        | Retrieve all notes           |
| GET    | /api/v1/notes/:id    | Get a single note by ID      |
| POST   | /api/v1/notes        | Create a new note            |
| PUT    | /api/v1/notes/:id    | Update an existing note      |
| DELETE | /api/v1/notes/:id    | Remove a note                |

## ✅ Best Practices  
- Strict input validation using express-validator  
- Consistent error handling middleware  
- Modular code structure for scalability  
- Separation of concerns with MVC architecture  
- Clear documentation for endpoints  
- Semantic versioning support  

---

**Developed as a foundational project for learning REST API development with Node.js and Express.**