import React from "react";
import { CgMail, CgRename } from "react-icons/cg";
import { MdPhone, MdBloodtype } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Cards() {
  return (
    <div className="flex flex-col bg-slate-300 h-96 w-72 rounded-lg overflow-hidden ">
      <div className="h-3/6  flex flex-col ">
        <div className=" h-2/3 bg-[#2825D1]  overflow-hidden w-full flex justify-center items-end">
          <img
            src="https://source.unsplash.com/sTORW_4vrwg"
            alt=""
            className="rounded-full h-24 w-24 object-cover border-slate-300 border-2 animate-bounce"
          />
        </div>
        <div className="h-1/3 flex flex-col justify-center items-center ">
          <ul>
            <li className="flex gap-x-1 justify-center items-center">
              <p className="font-tailfont text-sm text-[#2825D1] font-medium">
                Riyan Hossain, <span className="text-xs italic">Software Engineer</span>
              </p>
            </li>
            <li className="flex gap-x-1 justify-center items-center">
              <label>
                <CgMail className="text-[#2825D1]" />
              </label>
              <p className="  font-tailfont text-xs text-[#2825D1] font-medium">
                riyan@gmail.com
              </p>
            </li>
            <li className="flex gap-x-1 justify-center items-center">
              <label>
                <MdPhone className="text-[#2825D1]" />
              </label>
              <p className="font-tailfont text-xs font-medium text-[#2825D1]">
                01711-123456
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-3/6 flex flex-col justify-between items-center">
        <div className="w-11/12 flex justify-center items-center">
          <p className="text-sm italic text-[#2825D1]">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            deleniti dignissimos iusto cupiditate tempora dolorem, ipsam est
            debitis quam non!"
          </p>
        </div>
        <div className="flex gap-x-4 bg-[#2825D1] w-full p-3 justify-center items-center">
          <Link to="#">
            <BsFacebook className="text-white" />
          </Link>
          <Link to="riyan@gmail.com">
            <BsInstagram className="text-white" />
          </Link>
          <Link to="#">
            <BsTwitter className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
