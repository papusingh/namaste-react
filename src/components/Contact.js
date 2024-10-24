import React from "react";

const Contact = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl p-4 m-4">Contact us page</h2>
      <form>
        <input
          type="text"
          className="m-5 p-2 rounded-lg border-black"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="m-5 p-2 rounded-lg border-black"
          placeholder="message"
        ></input>
        <button className="m-5 p-2 rounded-lg border-spacing-2 bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
