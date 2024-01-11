// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { MyButton } from "src/components/MyButton";
import DummyComponent1 from "src/components/DummyComponent1";
import DummyComponent2 from "src/components/dummy-components/DummyComponent2";
import DummyComponent3 from "src/components/dummy-components/DummyComponent3";

function App() {
  return (
    <>
      <MyButton onClick={() => alert("I am a re-usable button")}>
        Click Me
      </MyButton>
      <DummyComponent1 />
      <DummyComponent2 />
      <DummyComponent3 />
    </>
  );
}

export default App;
