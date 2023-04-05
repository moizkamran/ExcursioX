import AddProperty from "./components/Pages/Hotel & Property/AddProperty/AddProperty";
import Body from "./components/MainScreen/Body";
import Dashboard from "./components/MainScreen/Dashboard";
import Hotel from "./components/Pages/Hotel & Property/Hotel";
import Login from "./components/Account/Login";
import React from "react";
import Register from "./components/Account/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRoomForFloor from "./components/Pages/Hotel & Property/AddProperty/components/AddRoomForFloor";
import FindBooking from "./components/SearchPages/FindBookings/FindBooking";
import EnterpriseLanding from "./components/Pages/Landing Pages/Enterprise Landing/EnterpriseLanding";
import ProtectRoute from "./utils/protectRoute";
import UnprotectRoute from "./utils/unprotectRoute";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* Dashboard Routes all elements are children of Dashboard */}
          <Route element={<ProtectRoute><Dashboard /></ProtectRoute>}>
            <Route path="/" element={<Body />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/AddProperty" element={<AddProperty />} />
            <Route path="/FindBooking" element={<FindBooking />} />
            <Route path="/floors/addFloor" element={<AddRoomForFloor />} />
          </Route>

          {/* Public/Non-CRM Routes */}
          <Route path="/login" element={<UnprotectRoute><Login /></UnprotectRoute>}></Route>
          <Route path="/register" element={<UnprotectRoute><Register /></UnprotectRoute>}></Route>
          <Route path="/enterprise" element={<EnterpriseLanding />}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}
