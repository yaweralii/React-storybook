import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <h1>Storybook in React</h1>
      <Button>Button</Button>
      <Input />
    </div>
  );
}

export default App;
