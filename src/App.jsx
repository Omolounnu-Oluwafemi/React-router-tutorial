// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
// import BasicExample from './components/Navbar';


function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' index element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App