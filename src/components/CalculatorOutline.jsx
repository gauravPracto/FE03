import React from "react";
import { Alert, CardBody, Card, CardTitle } from "reactstrap";
import KeyPad from "./Keypad";
const CalculatorOutline = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Star Wars</CardTitle>
        <br></br>
        <div>
          <Alert color="danger">{props.result} light years</Alert>
        </div>
        <br></br>
        <KeyPad onchange={props.onchange}></KeyPad>
      </CardBody>
    </Card>
  );
};

export default CalculatorOutline;
