import Dashboard from "./components/MainScreen/Dashboard";
import Login from "./components/Account/Login";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Register from "./components/Account/Register";
import { useAuthContext } from "./hooks/useAuthContext";


export default function App() {
  const {user} = useAuthContext()
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
