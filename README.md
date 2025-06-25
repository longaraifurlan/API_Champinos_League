⚽ Champions League API
An educational Node.js project that simulates a RESTful API for managing clubs in the Champions League.

🚀 Technologies Used
Node.js

Express.js 

Nodemon

UUID

CORS

JavaScript (ES6+)

📁 Project Structure

API_Champions_League/
│
├── src/
│   ├── controllers/     → Request handlers
│   ├── models/          → Club model definition
│   ├── data/            → Initial dataset
│   ├── repositories/    → Data access logic
│   ├── services/        → Business logic
│   ├── routes/          → API routes
│   └── utils/           → Utility functions
│
├── arch/                → Architecture diagram
├── .gitignore
├── package.json
└── server.js            → Application entry point
📌 Available Endpoints
GET /clubs
Returns the full list of registered clubs.

GET /clubs/:id
Returns the details of a specific club by ID.

POST /clubs
Creates a new club.

PUT /clubs/:id
Updates an existing club by ID.

DELETE /clubs/:id
Deletes a club by ID.

✅ Features
Modular and scalable architecture

Clean code organization using MVC + Repository + Service

Middleware support

Unique ID generation with uuid

Full CRUD functionality

🏗️ How to Run
Clone the repository:

git clone https://github.com/longaraifurlan/API_Champinos_League.git
Navigate to the project folder:

cd API_Champinos_League
Install dependencies:

npm install
Run the project in development mode:

npm run dev
💡 Future Improvements
Integration with a real database (e.g., MongoDB or PostgreSQL)

User authentication and authorization

API documentation (e.g., Swagger)

Unit and integration tests
