import { useState } from "react";
import "./App.css";
import Master from "./components/Master";
import Login from "./components/authcomponent/Login";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./components/contexts/AuthContext";
import Register from "./components/authcomponent/Register";
import ResetPassword from "./components/authcomponent/ResetPassword";
// import TrackOrder from "./components/nestedcomponent/TrackOrder";

export default function App() 
{
  const [isauth, setIsauth] = useState(true)
  return (
    <AuthContext.Provider value={{isauth, setIsauth}}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reset-password" element={<ResetPassword/>}></Route>
        <Route path="/*" element={<Master />}></Route>
      </Routes>
    </AuthContext.Provider>
  );
}
