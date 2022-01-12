import Links from "./components/Links";
import "./App.css";
import Albums from "./components/Albums";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="container">
      <Links className="container-links"></Links>
      <Albums className="container-albums"></Albums>
      <Friends className="container-albums"></Friends>
    </div>
  );
}

export default App;
