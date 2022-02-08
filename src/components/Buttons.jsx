import React from "react";
import { Button } from "reactstrap";
import "../css/buttons.css";
const Buttons = (props) => {
  console.log(props);
  return (
    <div>
      {[
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        "+",
        "-",
        "*",
        "/",
        "=",
        "clear",
        "backspace",
      ].map((ele) => {
        return (
          <Button value={ele} color="danger" outline onClick={props.onchange}>
            {ele}
          </Button>
        );
      })}
    </div>
  );
};

export default Buttons;
