import React, { useState } from "react";
import axios from "axios";

function Frm() {
  const [form, setForm] = useState({})
  const [selectedImage, setSelectedImage] = useState();

  const uploadImage = (e) => {
    setSelectedImage(e.target.files[0]);
    form.avatar = e.target.files[0];
    console.log(selectedImage);
  }
  const handleInputs = (e) => {
    form.permission = false;
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", form.name);
    formdata.append("email", form.email);
    formdata.append("phone", form.phone);
    formdata.append("location", form.location);
    formdata.append("avatar", selectedImage);
    formdata.append("igIdLink", form.igIdLink);
    formdata.append("fbIdLink", form.fbIdLink);
    formdata.append("twIdLink", form.twIdLink);
    formdata.append("occupation", form.occupation);
    formdata.append("quote", form.quote);
    formdata.append("permission", form.permission);

    console.log(formdata);
    axios
      .post("http://localhost:5000/api/contacts", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="h-[30rem] w-72 flex flex-col gap-2 justify-center items-center bg-[#070556] mb-6 md:w-96">
      <p className="font-bold text-white font-myfont">Add Contact</p>
      <form
      onSubmit={handleSubmit}
        className="w-11/12 flex flex-col gap-y-2"
        encType="multipart/form-data"
      >
        <input
          type="file"
          id="avatar"
          name="avatar"
          className="text-white font-myfont text-sm w-full"
          accept="image/png, image/jpeg, image/jpg"
          onChange={uploadImage}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic place-content-center"
          placeholder="name"
          name="name"
          onChange={handleInputs}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="occupation"
          name="occupation"
          onChange={handleInputs}
          required
        />
        <input
          type="email"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="email"
          name="email"
          onChange={handleInputs}
          required
        />
        <input
          type="number"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="phone"
          name="phone"
          onChange={handleInputs}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="current location"
          name="location"
          onChange={handleInputs}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="Facebook username"
          name="facebook"
          onChange={handleInputs}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="Instagram username"
          name="instagram"
          onChange={handleInputs}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="twitter username"
          name="twitter"
          onChange={handleInputs}
          required
        />
        <textarea
          placeholder="quote"
          name="quote"
          rows={4}
          className="text-sm font-myfont text-[#2825D1] w-full outline-cyan-400"
          onChange={handleInputs}
          required
        />
        <input
          type="submit"
          className="w-full bg-white text-[#2825D1] font-myfont font-bold"
        />
      </form>
    </div>
  );
}

export default Frm;
