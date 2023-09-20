// stylesheet
import "./App.css";

// React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./Pages/Home/Home";
import Login from "./components/auth/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/gallery/:id" element={<Home/>}/>
          {/* <Home /> */} 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
