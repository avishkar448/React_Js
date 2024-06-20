import React from "react";

function EventClick() {
  function ClickHandler() {
    console.log("User click on button");
  }
  return (
    <>
      <div>
        EventClick
      </div>
      <button onClick={ClickHandler}>Click Me</button>
    </>
  );
}

export default EventClick;
