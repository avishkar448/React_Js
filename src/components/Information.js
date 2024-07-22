import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../features/info/infoSlice";

const Information = () => {
  const name = useSelector((state) => state.information.name);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitInfo = (e) => {
    e.preventDefault();
    dispatch(addInfo(input));
    localStorage.setItem("name", input);
    setInput("");
  };

  const logoutBtn = (e) => {
    e.preventDefault();
    localStorage.removeItem("name");
    window.location.reload()
  };

  return name ? (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={logoutBtn}>logout</button>
    </div>
  ) : (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={submitInfo}>login</button>
    </div>
  );
  // <div>
  //   <input
  //     type="text"
  //     value={input}
  //     onChange={(e) => setInput(e.target.value)}
  //   />
  //   <button onClick={submitInfo}>submit</button>
  //   <h1>Hello! {name}</h1>
  // </div>
};

export default Information;
