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
import EnterpriseOnboarding from "./components/Pages/FunnelPages/Enterprise Signup/EnterpriseOnboarding";
import AddBooking from "./components/Pages/Hotel & Property/AddBooking/AddBooking";
import BookingPortal from "./components/Pages/Booking Portal/BookingPortal";
import SettingsPage from "./components/Pages/ConfigurationPages/SettingsPage/SettingsPage";
import MyProperties from "./components/Pages/Hotel & Property/MyProperties/MyProperties";
import SpaceView from "./components/Pages/Hotel & Property/SpaceView/Page/SpaceView";
import LoginWithPhone from "./components/Account/LoginWithPhone";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* Dashboard Routes all elements are children of Dashboard */}
          <Route element={<ProtectRoute><Dashboard /></ProtectRoute>}>
            <Route path="/" element={<Body />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/Bookings" element={<BookingPortal />} />
            <Route path="/AddProperty" element={<AddProperty />} />
            <Route path="/MyProperties" element={<MyProperties />} />
            <Route path="/FindBooking" element={<FindBooking />} />
            <Route path="/SpaceView" element={<SpaceView />} />
            

            {/* New Request Type Paths */}
            <Route path="/new/package-booking" element={<AddBooking />} />
            <Route path="/floors/addFloor" element={<AddRoomForFloor />} />
            
            {/* Configuation Pages */}
            <Route path="/settings" element={<SettingsPage />} />
          </Route>

          {/* Public/Non-CRM Routes */}
          <Route path="/login" element={<UnprotectRoute><Login /></UnprotectRoute>}></Route>
          <Route path="/login/phone" element={<UnprotectRoute><LoginWithPhone /></UnprotectRoute>}></Route>
          <Route path="/register" element={<UnprotectRoute><Register /></UnprotectRoute>}></Route>
          <Route path="/enterprise" element={<EnterpriseLanding />}></Route>
          <Route path="/enterprise/onboarding" element={<EnterpriseOnboarding />}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}
