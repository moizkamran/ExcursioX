import Dashboard from "./components/MainScreen/Dashboard";
import Hotel from "./components/Pages/Hotel & Property/Hotel";
import Login from "./components/Account/Login";
import React from "react";
import Register from "./components/Account/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

export default function App() {
  const {user} = useAuthContext()
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/hotel" element={<Hotel />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
