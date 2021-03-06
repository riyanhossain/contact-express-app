import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createContext, useState } from "react";

import Login from "./components/Admin/Login";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/PrivateRoute.js/PrivateRoute";

export const ContactsContext = createContext();
export const AdminsContext = createContext();
function App() {

  let [admin, setAdmin] = useState({ Admin: false });
  localStorage.setItem("admin", JSON.stringify(admin));
  const [ContactsInfo, setContactsInfo] = useState(false);
  return (
    <ContactsContext.Provider value={[ContactsInfo, setContactsInfo]}>
      <AdminsContext.Provider value={[admin, setAdmin]}>
        <div className="App flex flex-col items-center justify-between">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="admin" element={<Admin /> } />
            </Route>
          </Routes>
          <Footer />
        </div>
      </AdminsContext.Provider>
    </ContactsContext.Provider>
  );
}

export default App;
