import { useState } from "react";

// stylesheet
import "./App.css";

// React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./Pages/Home/Home";
import Login from "./components/auth/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "./components/SignUp";

function App() {
  const [user,setUser] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login setUser={setUser}/>}/>
        <Route path="/gallery" element={
          <ProtectedRoute user={user}>
            <Home user={user}/>
          </ProtectedRoute>
        }/>
        <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
