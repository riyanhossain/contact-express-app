import React, { useState } from "react";
import axios from "axios";
import { Message, toaster } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';



function Frm() {
  const [type, setType] = React.useState('success');
  const [placement, setPlacement] = React.useState('topCenter');

  const [form, setForm] = useState({});
  const [selectedImage, setSelectedImage] = useState();

  const uploadImage = (e) => {
    setSelectedImage(e.target.files[0]);
    form.avatar = e.target.files[0];
    console.log(selectedImage);
  };
  const handleInputs = (e) => {
    form.permission = true;
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
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

    console.log(form);
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
    setForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      avatar: "",
      igIdLink: "",
      fbIdLink: "",
      twIdLink: "",
      occupation: "",
      quote: "",
      permission: "",
    });

  };
  const message = (
    <Message showIcon type={type} >
      {type}: Contact added successfully.
    </Message>
  );
  return (
    <div className="h-[30rem] w-72 flex flex-col gap-2 justify-center items-center bg-blue-600 mb-6 md:w-96">
      <p className="font-bold text-white font-myfont">Add Contact</p>
      <form
        onSubmit={handleSubmit}
        onSubmitCapture={() => toaster.push(message, {placement})}
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
          value={form.name}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="occupation"
          name="occupation"
          onChange={handleInputs}
          value={form.occupation}
          required
        />
        <input
          type="email"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="email"
          name="email"
          onChange={handleInputs}
          value={form.email}
          required
        />
        <input
          type="number"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="phone"
          name="phone"
          onChange={handleInputs}
          value={form.phone}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="current location"
          name="location"
          onChange={handleInputs}
          value={form.location}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="Facebook link"
          name="fbIdLink"
          onChange={handleInputs}
          value={form.fbIdLink}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="Instagram link"
          name="igIdLink"
          onChange={handleInputs}
          value={form.igIdLink}
          required
        />
        <input
          type="text"
          className="font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic"
          placeholder="twitter link"
          name="twIdLink"
          onChange={handleInputs}
          value={form.twIdLink}
          required
        />
        <textarea
          placeholder="quote"
          name="quote"
          rows={4}
          className="text-sm font-myfont text-[#2825D1] w-full outline-cyan-400"
          onChange={handleInputs}
          value={form.quote}
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
