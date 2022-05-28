import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect( () => {
    fetch('http://localhost:5000/api/contacts')
    .then(res => res.json())
    .then(data => setContacts(data.contacts))
  },[])
  console.log(contacts);
  return (
    <div className="App">
      <h1>Email</h1>
      {
        contacts.map(contact => (
          <img src={contact.avatar} alt="" />
        ))
      }
    </div>
  );
}

export default App;
