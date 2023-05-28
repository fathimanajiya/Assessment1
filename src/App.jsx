import React from 'react'
import Navbar from "./units/Navbar"
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BlogForm from './pages/BlogForm';
import { Navbar } from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/addblog" element={<BlogForm />} />
              </Routes>
      </div>
  )
}