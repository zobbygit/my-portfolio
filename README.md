# 🚀 MERN Portfolio Website

A modern, fully animated **full-stack portfolio website** built using the MERN stack.  
This project showcases my skills, projects, and experience with smooth UI animations, a newsletter subscription system, and email integration.

🔗 Live Website: https://my-portfolio-mo00.onrender.com  
🔗 Backend API: (your backend URL here)

---

## ✨ Features

### 🎨 Frontend
- Built with **React + Vite**
- Tailwind CSS modern UI
- Floating animated project cards
- Responsive design (mobile-first)
- Typing animation hero section
- Parallax & motion effects
- Newsletter subscription form
- Contact form with EmailJS
- Smooth scroll navigation
- Dark theme UI

### ⚙️ Backend
- Node.js + Express REST API
- MongoDB database integration
- Newsletter subscriber system
- Email sending support
- CORS protected API
- Environment variable support
- Production-ready deployment

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Axios
- React Router
- EmailJS
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv

### Deployment
- Render (Frontend + Backend)
- MongoDB Atlas

---

## 📂 Project Structure

portfolio/
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── dist/
│ └── package.json
│
├── backend/
│ ├── routes/
│ ├── config/
│ ├── server.js
│ └── package.json


# ⚙️ Environment Variables

### Frontend (`.env`)
VITE_API_URL=your_backend_url/api
VITE_EMAILJS_SERVICE_ID=xxxx
VITE_EMAILJS_TEMPLATE_ID=xxxx
VITE_EMAILJS_PUBLIC_KEY=xxxx


### Backend (`.env`)
PORT=5000
MONGO_URI=your_mongodb_uri
FRONTEND_URL=your_frontend_url


---

## 🚀 Running Locally

### Backend
```bash
cd backend
npm install
npm run dev


### Frontend
cd frontend
npm install
npm run dev

🧪 API Endpoints
Method	Endpoint	Description
POST	/api/newsletter/subscribe	Subscribe email
POST	/api/newsletter/unsubscribe	Unsubscribe
GET	/api/newsletter/subscribers	Get all subscribers
GET	/api/health	Health check

👨‍💻 Author

Zohaib Aslam
Full Stack Developer | MERN Developer | Creative Coder

⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub!
