import React, { useEffect } from "react";
import { Alert } from "reactstrap";
import "../css/calculator.css";
import { useDispatch, useSelector } from "react-redux";
import CalculatorOutline from "./CalculatorOutline";
const { action: calculatorAction } = require("../redux/calculator");
const Calculator = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.result);
  const onClickHandler = (e) => {
    const value = e.target.value;
    if (Number(value) >= 0 && Number(value) <= 9)
      dispatch(calculatorAction.add({ number: value }));
    else if (value === "+" || value === "-" || value === "/" || value === "*")
      dispatch(calculatorAction.evaluate({ number: value, operator: value }));
    else if (value === "clear") dispatch(calculatorAction.reset());
    else if (value === "backspace") dispatch(calculatorAction.backSpace());
    else {
      dispatch(calculatorAction.evaluate({ number: value, operator: "=" }));
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", (event) => {
      if (Number(event.key) >= 0 && Number(event.key) <= 9)
        dispatch(calculatorAction.add({ number: event.key }));
      else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "/" ||
        event.key === "*"
      )
        dispatch(
          calculatorAction.evaluate({ number: event.key, operator: event.key })
        );
      else {
        dispatch(
          calculatorAction.evaluate({ number: event.key, operator: "=" })
        );
      }
    });
  }, []);
  return (
    <div className="calculator">
      <div>
        <Alert color="primary">Welcome to Jedi Classroom Calculator</Alert>
      </div>
      <CalculatorOutline
        result={number}
        onchange={onClickHandler}
      ></CalculatorOutline>
    </div>
  );
};

export default Calculator;
