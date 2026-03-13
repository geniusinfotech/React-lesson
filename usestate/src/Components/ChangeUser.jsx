import React, { useState } from "react";

const ChangeUser = () => {
  const [Data, setData] = useState({
    username: "Test_User",
    role: "Tester",
    photo:
      "https://i.pinimg.com/736x/84/30/0d/84300dc8f6159201c7d59d00a46a6450.jpg",
  });

  function Change() {
    if (Data.username === "Test_User") {
      let new_obj = { ...Data };
      console.log(new_obj);
      new_obj.username = "Kaliyo Codder";
      new_obj.role = "Developer";
      new_obj.photo =
        "https://i.pinimg.com/control1/736x/2a/40/d9/2a40d93ebcbd428f67073983ed0b42d9.jpg";
      setData(new_obj);
    } else {
      let new_obj = { ...Data };
      console.log(new_obj);
      new_obj.username = "Test_User";
      new_obj.role = "Tester";
      new_obj.photo =
        "https://i.pinimg.com/736x/84/30/0d/84300dc8f6159201c7d59d00a46a6450.jpg";
      setData(new_obj);
    }
  }

  return (
    <>
      <div className="mx-auto mt-10 bg-[#222] rounded-xl w-full max-w-sm h-auto px-4 py-2 text-center text-2xl font-bold">
        <img
          src={Data.photo}
          alt="photo"
          className="w-36 h-36 object-cover rounded-full my-4 mx-auto"
        />
        <h1 className="bg-[#555] w-full rounded-xl px-4 py-2 active:bg-orange-500 mb-2">
          {Data.username}
        </h1>
        <h3 className="bg-[#555] w-full rounded-xl px-4 py-2 active:bg-orange-500 mb-2">
          {Data.role}
        </h3>

        <button
          className="w-full bg-orange-500 px-4 py-2 my-2 rounded-xl font-bold hover:bg-orange-100 hover:text-orange-500 hover:scale-95 transition select-none"
          onClick={Change}
        >
          Switch User
        </button>
      </div>
    </>
  );
};

export default ChangeUser;
