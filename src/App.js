import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ChildOne } from "./components/Optimization/ChildOne";
import { ParentOne } from "./components/Optimization/ParentOne";
import { Parent } from "./components/Parent Child/Parent";
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

      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}

      {/* <Parent /> */}

      <ParentOne>
        <ChildOne/>
      </ParentOne>
    </div>
  );
}

export default App;
