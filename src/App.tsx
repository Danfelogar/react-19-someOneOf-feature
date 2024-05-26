import { useState, version } from "react";
import reactLogo from "./assets/react.svg";
import {
  preload,
  // preinit, prefetchDNS
} from "react-dom";

import { Seo } from "./components";
import "./App.css";
import { Form } from "./components/Form";
import { UseExample } from "./hooks/useExample";
import { UserContextExample } from "./components/UserContextExample";
// import { UseExample } from './hooks/useExample';

function App() {
  const [show, setShow] = useState(false);
  //darle prioridad baja a la carga de este css en caso de ser necesario ya que lo consume el componente Form
  preload("https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css", {
    as: "style",
    priority: "low",
  });

  return (
    <>
      <Seo
        title={`React-${version}-New-Features`}
        description="React 19 New Features"
      />
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1 style={{ marginBottom: 0 }}> Hello React 19 </h1>
        <small style={{ color: "yellow", fontSize: "10px" }}>
          This versions is {version}
        </small>
      </div>

      <button onClick={() => setShow(!show)}>Show Form</button>
      {show && <Form />}
      <UseExample />
      <UserContextExample />
    </>
  );
}

export default App;
