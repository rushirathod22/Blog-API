

```md
# 📝 Blog API – Full Stack Blogging Platform

A modern **full-stack blogging platform** where users can register, log in, and create blog posts.  
Built with a clean backend architecture and a polished frontend UI.

This project demonstrates **real-world backend development**, authentication, database modeling, and frontend–backend integration.

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- JWT-based authentication
- Secure password hashing (bcrypt)
- Protected routes

### 📰 Blog Management
- Create blog posts
- View all posts
- Edit & delete own posts
- Author linked to each post

### 🎨 Frontend
- Clean, modern UI
- Indigo theme with glass-like cards
- Responsive layout
- Real-time UI updates after actions

### 🗄️ Database
- MongoDB with Mongoose
- Proper schema design
- User ↔ Post relationship

---

## 🧠 Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT**
- **bcrypt**

### Frontend
- **HTML**
- **Tailwind CSS**
- **JavaScript (Fetch API)**

---

## 📂 Project Structure

```

Blog-API/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── index.html        # Register
│   ├── login.html        # Login
│   └── dashboard.html   # Dashboard
│
├── .gitignore
└── README.md

````

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rushirathod22/Blog-API.git
cd Blog-API
````

---

### 2️⃣ Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend usage

Open these files directly in your browser:

```
frontend/index.html      → Register
frontend/login.html      → Login
frontend/dashboard.html  → Dashboard
```

---

## 🔁 How the App Works

1. User registers via **Register page**
2. User logs in and receives a **JWT token**
3. Token is stored in `localStorage`
4. User accesses the **Dashboard**
5. User can create, edit, and delete blog posts
6. Backend verifies JWT for protected actions

---

## 📸 Screenshots

> *(Add screenshots here for extra impact)*
> Register Page
> Login Page
> Dashboard Page

---

## 🚀 What This Project Demonstrates

* Clean REST API design
* Real authentication flow
* Secure backend practices
* MongoDB schema relationships
* Frontend–backend integration
* Debugging real production-like issues

This is **not a tutorial project** — it’s a **practical, industry-style application**.

---

## 🔮 Future Improvements

* Comments system
* User profile page
* Dark mode
* Pagination for posts
* Deployment (Render / Vercel)
* React frontend

---

## 👨‍💻 Author

**Rushikesh Rathod**
Computer Science (AI) Student
Aspiring Full-Stack Developer

GitHub: [https://github.com/rushirathod22](https://github.com/rushirathod22)

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 💬 Share feedback

Happy coding 🚀

```

---

## 🔥 Why this README is “WOW”

- Clear structure
- Professional tone
- Easy to scan
- Recruiter-friendly
- Hackathon-ready
- Shows **confidence**, not noise

---

### ✅ Next smart moves (optional)
- Add screenshots
- Pin this repo on GitHub
- Add it to your resume
- Share on LinkedIn with a short post

If you want, I can:
- Write **resume bullet points**
- Write a **LinkedIn post**
- Review your GitHub like a recruiter
- Help you deploy it live

Just tell me 👌
```
