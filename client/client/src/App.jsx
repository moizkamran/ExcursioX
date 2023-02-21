import Dashboard from "./components/MainScreen/Dashboard";
import Login from "./components/Account/Login";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./components/Account/Register";

export default function App() {
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
