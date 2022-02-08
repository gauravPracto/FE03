import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";
import { Provider } from "react-redux";
import store from "../src/store/storeConfig";
function App() {
  return (
    <Provider store={store}>
      <Calculator></Calculator>
    </Provider>
  );
}

export default App;
