import './App.css';
import Applications from './pages/applications';
import EditApplication from './pages/editApplication';
import Bootcamps from './pages/bootcamps';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import '../src/tailwind.css';
import Sidebar from './components/sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/editApplication" element={<EditApplication />} />
          <Route path="/bootcamps" element={<Bootcamps />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}


export default App;
