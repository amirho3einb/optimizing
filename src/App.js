import React from "react";
import "./App.css";
import ParentComponent from "./components/useCallback/ParentComponent";
import Counter from "./components/useMemo/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
