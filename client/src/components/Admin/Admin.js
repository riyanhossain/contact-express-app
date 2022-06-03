import React, { useContext } from 'react'
import { AdminsContext } from '../../App';

function Admin() {
    const [admin, setAdmin] = useContext(AdminsContext);
    console.log(admin);
  return (
    <div>Admin</div>
  )
}

export default Admin