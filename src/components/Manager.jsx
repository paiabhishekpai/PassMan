import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mycontainer   max-w-4xl">
      <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>
                    <span className="text-white">Pass</span><span className='text-green-500'>Man/&gt;</span>
                </h1>
                <p className='text-green-700 text-lg text-center'>Manage all your passwords at one place!</p>
        <div className="flex flex-col p-4 text-white">
          <input className="rounded-full border border-green-800 w-full p-4 py-1" type="text" />
        </div>
        <div className="flex gap-2 w-full">
        <input className="rounded-full border border-green-800 w-full p-4 py-1" type="text" />
        <input className="rounded-full border border-green-800 w-full p-4 py-1" type="text" />
        </div>
      </div>
    </>
  );
};

export default Manager;
