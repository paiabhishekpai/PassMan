import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="mycontainer   max-w-4xl">
          <h1 className="text-4xl text font-bold text-center">
            <span className="text-green-500"> &lt;</span>
            <span className="text-white">Pass</span>
            <span className="text-green-500">Man/&gt;</span>
          </h1>
          <p className="text-green-700 text-lg text-center">
            Manage all your passwords at one place!
          </p>
          <div className="flex flex-col py-4 text-white">
            <input
              className="rounded-full border border-green-800 w-full p-4 py-1"
              type="text"
              placeholder="Enter Website URl"
            />
          </div>
          <div className="flex gap-2 w-full">
            <input
              className="rounded-full border border-green-800 w-full p-4 py-1"
              type="text"
              placeholder="Enter username"
            />
            <div className="relative">
            <input
              className="rounded-full border border-green-800 w-full p-4 py-1"
              type="text"
              placeholder="Enter password"
            />
            <span className="absolute right-1 top-1.5"> 
              <img width={20} src="icons/eye.png" alt="eye" />
            </span>
            </div>
            
          </div>
          <button className=" flex mx-auto my-2 gap-1 justify-center items-center bg-green-400 text-black font-bold hover:font-extrabold hover:bg-green-500 px-3 p-1 rounded-full">
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              colors="primary:#121331,secondary:#000000"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
