import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminsContext, ContactsContext } from "../../App";

function Navbar() {
  const [contactsInfo, setContactsInfo] = useContext(ContactsContext);
  const [newContacts, setNewContacts] = useState(false);
  const [admin, setAdmin] = useContext(AdminsContext);


  useEffect(() => {
    const getContacts = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/api/contacts?page=${contactsInfo.prevPage + 1}`
        );
  
        setNewContacts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getContacts();
  }, [contactsInfo]);
  console.log(contactsInfo);
  console.log(newContacts);
  const handleInputs = (e) => {
    let name = e.target.value;
    if (name.length > 0) {
      const filtered = contactsInfo.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      );
      setContactsInfo({ ...contactsInfo, contacts: filtered });
    } else {
      setContactsInfo(newContacts);
    }
    // console.log(newContacts);
  };
  return (
    <section className="bg-blue-400 w-screen flex flex-col justify-center items-center h-[4rem]">
      <nav className="w-11/12">
        <ul className="flex justify-between items-center">
          <li className="p-4">
            <label>
              <Link
                to="/"
                className="font-bold text-white font-tailfont hover:text-white"
              >
                ContactME
              </Link>
            </label>
          </li>
          <li className="flex items-center">
            <input
              type="text"
              className="border-0 outline-0 text-center text-blue-900 font-tailfont font-semibold w-24 md:w-48 lg:w-64 placeholder:italic"
              placeholder="search by name"
              onChange={handleInputs}
            />
          </li>
          <ul className="flex gap-x-4">
            <li>
              <Link to="/admin" className="text-white font-tailfont">
                {" "}
                Admin{" "}
              </Link>
            </li>
            <li className="hidden  text-white font-tailfont  md:block lg:block">
              <Link to="/" className=" text-white font-tailfont">
                {" "}
                Home{" "}
              </Link>
            </li>
            {admin?.Admin && (
              <li className="text-white font-tailfont  md:block lg:block">
                <Link to="/" className=" text-white font-tailfont" onClick={()=> {
                  setAdmin({Admin : false});
                  localStorage.setItem('admin', {Admin : false});
                  }}>
                  {" "}
                  Logout{" "}
                </Link>
              </li>
            )}
          </ul>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
