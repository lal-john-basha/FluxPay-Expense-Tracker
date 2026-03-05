FluxPay Expense Tracker

FluxPay is a simple full-stack expense tracking application that allows users to record and manage their daily expenses.

Features

- Add expenses
- View expenses
- Delete expenses
- Data stored in MongoDB Atlas
- REST API with Node.js and Express

Tech Stack

Frontend:

- HTML
- CSS
- JavaScript

Backend:

- Node.js
- Express.js

Database:

- MongoDB Atlas

How to Run the Project

1. Clone the repository
2. Install dependencies

npm install

3. Run the server

node server.js

4. Open in browser

http://localhost:5000

1️⃣ Project Overview
FluxPay Expense Tracker is a web application that helps users record, track, and analyze daily expenses.
The app allows users to:
Add expenses
Delete expenses
View total spending
Visualize expenses by category using charts
It helps people understand where their money is being spent.
2️⃣ Problem Statement
Many people struggle to manage daily spending.
Problems:
No clear record of expenses
Hard to analyze spending habits
Manual tracking is difficult
FluxPay solves this by providing a simple digital expense management system.
3️⃣ Features
Add Expenses
Users can enter:
Expense title
Amount
Category
Example:
Copy code

Title: Lunch
Amount: ₹150
Category: Food


Delete Expenses
Users can remove any expense entry.
Total Expense Counter
The system calculates the total amount spent.
Example:
Copy code

Total Expense: ₹1450
Category Distribution Chart
A pie chart shows spending distribution.
Example categories:
Food
Transport
Shopping
Bills
Real-Time Updates
When a new expense is added:
Expense list updates
Total updates
Chart updates
4️⃣ Technology Stack
Frontend
HTML
CSS
JavaScript
Backend
Node.js
Express.js
Database
MongoDB
Visualization
Chart.js
These technologies work together to create a full-stack web application.

,These technologies work together to create a full-stack web application.
5️⃣ System Architecture
Copy code

User Interface
     ↓
Frontend (HTML / CSS / JS)
     ↓
API Requests
     ↓
Node.js + Express Server
     ↓
MongoDB Database
     ↓
Data Response
     ↓
Charts + Expense List Update
6️⃣ Project Folder Structure
Copy code

fluxpay-expense-tracker
│
├── server.js
├── package.json
│
├── models
│     └── Expense.js
│
├── routes
│     └── expenses.js
│
├── public
│     ├── index.html
│     ├── script.js
│     └── style.css
│
└── README.md
7️⃣ Example API Endpoints
Add Expense
Copy code

POST /api/expenses
Get Expenses
Copy code

GET /api/expenses
Delete Expense
Copy code

DELETE /api/expenses/:id
8️⃣ Example Data in Database
Copy code

{
  "title": "Lunch",
  "amount": 150,
  "category": "Food"
}
9️⃣ Application Workflow
User enters expense details
Frontend sends request to backend
Backend stores data in database
Updated expense list is returned
Frontend updates UI and chart
🔟 Future Improvements
You can improve FluxPay by adding:
• User login system
• Monthly expense reports
• Budget alerts
• Export data to Excel
• Mobile responsive UI
These upgrades make it closer to a real fintech product.
