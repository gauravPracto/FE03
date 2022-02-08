import { Alert } from "reactstrap";
import Buttons from "./Buttons";
const KeyPad = (props) => {
  return (
    <div>
      <Alert color="warning">
        <Buttons onchange={props.onchange}></Buttons>
      </Alert>
    </div>
  );
};

export default KeyPad;
