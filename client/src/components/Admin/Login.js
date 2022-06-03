import axios from "axios";
import React, { useContext, useState } from "react";
import { AdminsContext } from "../../App";

function Login() {
    const [admin , setAdmin] = useContext(AdminsContext);
    const [inputs, setInputs] = useState({});
    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{

            const res = await axios.post("http://localhost:5000/api/login", inputs);
            localStorage.setItem("admin", JSON.stringify(res.data));
            setAdmin(res.data);
            console.log(JSON.parse(localStorage.getItem('admin')));
        }
        catch(err){
            console.log(err);
            localStorage.setItem("admin", JSON.stringify({Admin: false}));
            setAdmin({Admin: false});

        }
    }
  return (
    <section>
      <div className="bg-[#070556] h-96 w-80 flex flex-col justify-center items-center gap-y-2">
          <p className="font-bold text-white font-myfont">Login</p>
        <form className="w-11/12 flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="p-2 font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic place-content-center"
            onChange={handleInputs}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="p-2 font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic place-content-center"
            onChange={handleInputs}
            required
          />
          <input
            type="submit"
            className="p-2 w-full bg-white text-[#2825D1] font-myfont font-bold"
          />
        </form>
      </div>
    </section>
  );
}

export default Login;
