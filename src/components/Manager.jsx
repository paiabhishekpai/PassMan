import React from "react";
import { useRef, useState, useEffect } from "react";
const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const passwordRef = useRef();
  const ref = useRef();
  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };
  const savePassword = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => [
    setform({ ...form, [e.target.name]: e.target.value }),
  ];

  const copyText = ()=>{
    alert("copied to clipboard")
    navigator.clipboard.writeText(text);
  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
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
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-800 text-black  w-full p-4 py-1"
            type="text"
            name="site"
            placeholder="Enter Website URL"
          />
        </div>
        <div className="flex gap-2 w-full">
          <input
            value={form.username}
            onChange={handleChange}
            className="rounded-full border border-green-800  text-black w-full p-4 py-1"
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <div className="relative">
            <input
              ref={passwordRef}
              value={form.password}
              onChange={handleChange}
              className="rounded-full border border-green-800 text-black  w-full p-4 py-1"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <span
              className="absolute right-1 top-1.5 cursor-pointer "
              onClick={showPassword}
            >
              <img ref={ref} width={20} src="icons/eye.png" alt="eye" />
            </span>
          </div>
        </div>
        <button
          onClick={savePassword}
          className=" flex mx-auto my-2 gap-1 justify-center items-center bg-green-400 text-black font-bold hover:font-extrabold hover:bg-green-500 px-3 p-1 rounded-full"
        >
          <lord-icon
            src="https://cdn.lordicon.com/sbnjyzil.json"
            trigger="hover"
            colors="primary:#121331,secondary:#000000"
          ></lord-icon>
          Add Password
        </button>
        <div className="passwords m-5">
          <h2 className="text-white text-xl mx-auto font-bold text-center py-2">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && (
            <div className="text-white"> No Passwords to show </div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-700 text-white py-2 border border-green-700">
                <tr>
                  <th>Site</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-2 border border-green-300 text-center w-20">
                        <div className="flex items-center justify-center ">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 border border-green-300 text-center w-20">
                        <div className="flex items-center justify-center ">
                          <span>{item.username}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 border border-green-300 text-center w-20">
                        <div className="flex items-center justify-center ">
                          <span>{item.password}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>{" "}
                      </td>
                      <td className="px-2 border border-green-300 text-center w-20">
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "20px", height: "20px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "20px", height: "20px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
