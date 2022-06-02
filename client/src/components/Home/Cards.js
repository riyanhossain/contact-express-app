import React from "react";
import { CgMail } from "react-icons/cg";
import { MdPhone } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Cards(props) {
  const { contact } = props;
  const { name, email, phone, location, avatar, igIdLink, fbIdLink, twIdLink, occupation , quote } = contact;
  return (
    <div className="flex flex-col bg-slate-300 h-96 w-72 rounded-lg overflow-hidden ">
      <div className="h-3/6  flex flex-col ">
        <div className=" h-2/3 bg-[#2825D1]  overflow-hidden w-full flex justify-center items-end">
          <img
            src={avatar}
            alt=""
            className="rounded-full h-24 w-24 object-cover border-slate-300 border-2 animate-bounce"
          />
        </div>
        <div className="h-1/3 flex flex-col justify-center items-center ">
          <ul>
            <li className="flex gap-x-1 justify-center items-center">
              <p className="font-myfont text-sm text-[#2825D1] font-medium">
                {name},
                <span className="text-xs italic font-myfont">
                  {occupation}
                </span>
              </p>
            </li>
            <li className="flex gap-x-1 justify-center items-center">
              <label>
                <CgMail className="text-[#2825D1]" />
              </label>
              <p className="  font-myfont text-xs text-[#2825D1] font-medium">
                {email}
              </p>
            </li>
            <li className="flex gap-x-1 justify-center items-center">
              <label>
                <MdPhone className="text-[#2825D1]" />
              </label>
              <p className="font-myfont text-xs font-medium text-[#2825D1]">
                {phone}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-3/6 flex flex-col justify-between items-center">
        <div className="w-11/12 flex justify-center items-center">
          <p className="text-sm italic text-[#2825D1] font-myfont">
            {quote}
          </p>
        </div>
        <div className="flex gap-x-4 bg-[#2825D1] w-full p-3 justify-center items-center">
          <a
            href="https://www.facebook.com/riyan.hossain.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="text-white" />
          </a>
          <a
            href="https://www.facebook.com/riyan.hossain.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="text-white" />
          </a>
          <a
            href="https://www.facebook.com/riyan.hossain.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
