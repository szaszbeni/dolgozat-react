import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./components/Nav";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Work from "./pages/Work.jsx";
import Work_detail from "./pages/Work_detail.jsx";


export default function App() {

  return (
    <BrowserRouter>
      <Navigation/>

      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Blog" element={<Blog/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Work" element={<Work/>} />
        <Route path="/Work_detail" element={<Work_detail/>} />
       

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}