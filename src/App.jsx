import { useState } from "react";
import Event from "./Components/Event";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Waves from "./waves.svg?component";

import "./App.css";
import AllUsers from "./Components/AllUsers";
function App() {
  if(window.location.pathname==='/getUglyTableSecretlyButOpenly'){
    return <AllUsers/>
  }
  return (
    <div className="App scroll-smooth">
      <div className="min-h-screen relative">
        <Navbar />
        <Event />
        <div className="absolute bottom-0  w-full">
          <Waves />
        </div>
      </div>
      <div >
        
        <Form />
      </div>
    </div>
  );
}

export default App;
