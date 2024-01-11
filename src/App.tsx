// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { MyButton } from "src/components/MyButton";
import DummyComponent1 from "src/components/DummyComponent1";
import DummyComponent2 from "src/components/dummy-components/DummyComponent2";
import DummyComponent3 from "src/components/dummy-components/DummyComponent3";
import { DummyComponent4 } from "src/components/DummyComponent4";

function App() {
  return (
    <>
      <MyButton onClick={() => alert("I am a re-usable button")}>
        Click Me
      </MyButton>
      <hr />
      <DummyComponent1 />
      <hr />
      <DummyComponent2 />
      <hr />
      <DummyComponent3 />
      <hr />
      <DummyComponent4 />
    </>
  );
}

export default App;
