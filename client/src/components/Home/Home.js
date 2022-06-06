import React, { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
import Frm from "./Frm";
import axios from "axios";
import { ContactsContext } from "../../App";


function Home() {
  
  const [page, setPage] = useState(1);

  console.log(page)

  const [contactsInfo, setContactsInfo] = useContext(ContactsContext);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const data = await axios.get(`http://localhost:5000/api/contacts?page=${page}`);
  
        setContactsInfo(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getContacts();
  }, [page]);
  const { message, contacts, totalPages } = contactsInfo;
  const pagearr = () => {
    let arr = [];
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
    return arr;
  }
  return (
    <main >
      <div className="flex flex-col lg:flex-row-reverse w-screen m-6 justify-center items-center lg:items-start">
      <section className="w-2/6 flex justify-center">
        <div>
          <Frm />
        </div>
      </section>
      <section className="w-4/6 flex flex-wrap justify-center gap-6 ">
        {contactsInfo && 
          contacts.map((contact) => (
            contact.permission && <Cards key={contact._id} contact={contact} />
          ))
        }
      </section>
      </div>
      <div>
        <div className="flex justify-center items-center gap-x-4 mb-6">
          {
            pagearr().map((page) => (
              <button className="bg-[#2825D1] w-8 h-6 text-white font-myfont font-semibold" onClick={()=>setPage(page)} key={page}>{page}</button>
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default Home;
