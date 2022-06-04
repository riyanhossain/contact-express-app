import React from "react";

function Footer() {
  return (
    <section className="bg-blue-400 flex flex-col justify-between h-[5rem]">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-white font-tailfont font-bold">ContactME</h4>
        <p className="text-white font-tailfont font-normal">
          Design and Develop By <span className="font-bold">m3rabr1yan</span>
        </p>
      </div>
      <div className="bg-blue-600 w-screen flex justify-center items-center">
        <p className="text-sm font-tailfont text-white">Copyright@<span>{new Date().getFullYear()}</span></p>
      </div>
    </section>
  );
}

export default Footer;
