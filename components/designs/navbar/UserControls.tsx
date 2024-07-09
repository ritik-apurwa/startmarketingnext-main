import React from "react";

const UserControls = () => {
  return (
    <section className="">
      <div className="flex items-center gap-x-2">
        <button className="bg-transparent text-white border border-gray-500 px-6 py-3 rounded-3xl hover:bg-white hover:text-black hover:border-transparent hover:ring-2 hover:ring-gray-500 transition-all ease-in-out duration-300">
          Register
        </button>
        <button className="bg-white text-black border border-gray-500 px-6 py-3 rounded-3xl hover:bg-transparent hover:text-gray-300 hover:border-white hover:ring-2 hover:ring-gray-500 transition-all ease-in-out duration-300">
          Contact
        </button>
      </div>
    </section>
  );
};

export default UserControls;
