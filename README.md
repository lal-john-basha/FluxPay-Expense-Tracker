
---

# 💳 FluxPay – Expense Tracker

FluxPay is a **full-stack expense tracking web application** that allows users to record, manage, and analyze their daily expenses.

The application helps users understand their **spending habits through real-time expense tracking and visual charts**.

---

# 📌 Project Overview

Managing daily expenses manually can be difficult. Many people lose track of where their money goes.

**FluxPay solves this problem** by providing a simple digital platform where users can:

* Record daily expenses
* Track total spending
* View spending distribution
* Manage and delete expense records

The system stores data in **MongoDB Atlas** and uses **Node.js + Express** to manage the backend API.

---

# 🚀 Features

✅ Add expenses
✅ View expense list
✅ Delete expenses
✅ Total expense calculation
✅ Category-based expense tracking
✅ Real-time updates
✅ Data stored in **MongoDB Atlas**

---

# 🛠 Technology Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Visualization

* Chart.js

---

# 📂 Project Structure

```
FluxPay-Expense-Tracker
│
├── server.js
├── package.json
│
├── models
│   └── Expense.js
│
├── routes
│   └── expenses.js
│
├── public
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── images
│
└── README.md
```

---

# ⚙️ System Architecture

```
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
```

---

# 📊 Example Expense Entry

```
Title: Lunch
Amount: ₹150
Category: Food
```

Example Database Record:

```json
{
  "title": "Lunch",
  "amount": 150,
  "category": "Food"
}
```

---

# 🔌 API Endpoints

### Add Expense

```
POST /api/expenses
```

### Get Expenses

```
GET /api/expenses
```

### Delete Expense

```
DELETE /api/expenses/:id
```

---

# ▶ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/lal-john-basha/FluxPay-Expense-Tracker.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd FluxPay-Expense-Tracker
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Server

```bash
node server.js
```

### 5️⃣ Open in Browser

```
http://localhost:5000
```

---

# 📈 Application Workflow

1. User enters expense details
2. Frontend sends request to backend
3. Backend stores data in MongoDB
4. Updated expense list is returned
5. UI and charts update automatically

---

# 🔮 Future Improvements

Future enhancements for FluxPay:

* User authentication system
* Monthly expense reports
* Budget alerts
* Export expenses to Excel
* Mobile responsive UI
* Dashboard analytics

---

# 👨‍💻 Author

**Shaik Lal John Basha**
Electronics and Communication Engineering

GitHub
[https://github.com/lal-john-basha](https://github.com/lal-john-basha)

---

