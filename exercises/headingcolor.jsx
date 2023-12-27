import React from "react";
function App() {
  const [headingColor, setColor] = React.useState("white");

  function handleColorChange(bool) {
    setColor(() => (bool === "yes" ? "green" : "red"));
  }

  return (
    <div id="app">
      <h1 style={{ color: headingColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleColorChange("yes")}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleColorChange("no")}>No</button>
        </li>
      </menu>
    </div>
  );
}

function App() {
    
    const [cssClass, setCssClass ] = React.useState(undefined)    
    
    function handleCssClass(bool){
        setCssClass(() => (bool === "yes" ? "highlight-green" : "highlight-red"));
    }
  return (
    <div id="app">
      <h1 className={cssClass}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=>handleCssClass("yes")}>Yes</button>
        </li>
        <li>
          <button onClick={()=>handleCssClass("no")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

