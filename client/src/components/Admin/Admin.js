import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AdminsContext } from "../../App";
import AdminCards from "./AdminCards";

function Admin() {
  const [admin, setAdmin] = useContext(AdminsContext);
  const [allContacts, setAllContacts] = useState(false);
  const { message, contacts } = allContacts;

  useEffect(() => {
    const getAllContacts = async () => {
      try {
        const data = await axios.get(`http://localhost:5000/api/allcontacts`);
        setAllContacts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllContacts();
  }, [allContacts]);
  return (
    <section className="flex gap-6 my-6 flex-wrap justify-center items-center">
      {allContacts &&
        contacts.map((contact) => (
          <AdminCards key={contact._id} contact={contact} />
        ))}
    </section>
  );
}

export default Admin;
