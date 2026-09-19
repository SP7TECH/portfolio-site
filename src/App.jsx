import { createRoot } from "react-dom/client";
import "./App.css";

function App() {
  return <h1>Senior Software Engineer</h1>;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
