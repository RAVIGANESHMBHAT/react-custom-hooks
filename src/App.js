import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { UseReducer } from "./components/UseReducer/UseReducer";
import UserForm from "./components/UserForm";
import { UseState } from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      {/* <DocTitleOne />
      <DocTitleTwo /> */}

      {/* <CounterOne />
      <CounterTwo /> */}

      {/* <UserForm /> */}

      {/* <UseState /> */}
      {/* <UseReducer /> */}

      <ObjectUseState />
    </div>
  );
}

export default App;
