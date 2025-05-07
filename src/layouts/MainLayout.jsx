import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ChatBot from '../components/ChatBot'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
            <ChatBot />
            {/* <ToastContainer /> */}
        </div>
    )
}

export default MainLayout