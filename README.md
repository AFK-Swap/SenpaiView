# SenpaiView 🎌
**Full-Stack Anime Streaming Platform with AI Integration**

A modern, full-stack anime streaming platform built with the MERN stack, featuring AI-powered recommendations and comprehensive content management.

## 🚀 **Live Demo**
*Add your live demo link here*

## 📋 **Table of Contents**
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## ✨ **Features**

### **User Management**
- 🔐 Complete user authentication system (registration/login)
- 🔑 JWT token-based secure authentication
- 👤 User profile management and settings
- 📧 Password reset functionality

### **Anime Catalog**
- 📺 Comprehensive anime database with detailed information
- 🔍 Advanced search and filtering capabilities
- 📖 Detailed anime pages with synopsis, ratings, and metadata
- 🏷️ Genre-based categorization and filtering

### **Personal Features**
- ❤️ Personal watchlist management
- 📚 Watch history tracking
- ⭐ Rating and review system
- 🔖 Bookmark favorite series

### **Streaming Integration**
- ▶️ Video streaming with multiple sources
- 🎬 YouTube integration for trailers and content
- 📱 Responsive video player with custom controls
- 💾 Viewing progress tracking

### **AI-Powered Features**
- 🤖 AI-powered anime recommendations using OpenAI SDK
- 🧠 Advanced content analysis with Deepseek API
- ⚡ Fast AI responses via Groq SDK
- 📊 Personalized content suggestions

### **Admin Panel**
- 👨‍💼 Comprehensive admin dashboard
- 📊 User management and analytics
- 📝 Content management (add/edit/remove anime)
- 📈 Platform statistics and insights

### **User Experience**
- 🔔 Real-time toast notifications
- 📱 Fully responsive design for all devices
- ⚡ Single Page Application (SPA) with smooth navigation
- 🎨 Modern UI with Tailwind CSS and Framer Motion animations

## 🛠️ **Technology Stack**

### **Frontend**
- **React 19** - Latest React with concurrent features
- **Redux Toolkit** - State management with modern Redux patterns
- **React Router** - Client-side routing for SPA navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and development server

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing and security

### **AI Integration**
- **OpenAI SDK** - AI-powered recommendations and content analysis
- **Deepseek API** - Advanced AI processing and insights
- **Groq SDK** - High-performance AI inference

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **Nodemon** - Development server with auto-restart
- **Git** - Version control

## 🚀 **Installation**

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### **Clone Repository**
```bash
git clone https://github.com/AFK-Swap/SenpaiView.git
cd SenpaiView
```

### **Frontend Setup**
```bash
cd frontend
npm install
```

### **Backend Setup**
```bash
cd backend
npm install
```

### **Environment Variables**
Create `.env` files in both frontend and backend directories:

**Backend `.env`:**
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
DEEPSEEK_API_KEY=your_deepseek_api_key
GROQ_API_KEY=your_groq_api_key
DATABASE_URL=your_database_connection_string
```

**Frontend `.env`:**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=SenpaiView
```

## 🎮 **Usage**

### **Development Mode**
```bash
# Start backend server
cd backend
npm run dev

# Start frontend development server (in new terminal)
cd frontend
npm run dev
```

### **Production Build**
```bash
# Build frontend for production
cd frontend
npm run build

# Start production server
cd backend
npm start
```

## 📡 **API Endpoints**

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh JWT token

### **User Management**
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/watchlist` - Get user watchlist
- `POST /api/users/watchlist` - Add to watchlist

### **Anime Management**
- `GET /api/anime` - Get all anime with pagination
- `GET /api/anime/:id` - Get specific anime details
- `POST /api/anime` - Add new anime (Admin only)
- `PUT /api/anime/:id` - Update anime (Admin only)
- `DELETE /api/anime/:id` - Delete anime (Admin only)

### **AI Features**
- `POST /api/ai/recommendations` - Get AI-powered recommendations
- `POST /api/ai/analyze` - Analyze content with AI

## 🏗️ **Project Structure**

```
SenpaiView/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── server.js
└── README.md
```

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Fahmidur Islam Swapnil**
- GitHub: [@AFK-Swap](https://github.com/AFK-Swap)
- Email: fahmidur.i.swapnil@gmail.com
- University: BRAC University

## 🙏 **Acknowledgments**

- OpenAI for AI integration capabilities
- The React and Node.js communities
- BRAC University Computer Science Department

---

*Built with ❤️ using modern web technologies and AI integration*
