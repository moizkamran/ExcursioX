import Dashboard from "./components/MainScreen/Dashboard";
import Login from "./components/Account/Login";
import Nav from "./components/MainScreen/Nav";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
