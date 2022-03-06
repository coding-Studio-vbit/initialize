import Event from "./Components/Event";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Waves from "./waves.svg?component";

import "./App.css";
import AllUsers from "./Components/AllUsers";
import { NotificationsProvider } from "@mantine/notifications";
import { Route, Routes } from "react-router-dom";
import Registered from "./Components/Registered";
function App() {
  return (
    <Routes>
      
      <Route path="/registered" element={<Registered />} />

      <Route path="/getUglyTableSecretlyButOpenly" element={<AllUsers />} />
      <Route
        path="/"
        element={
          <NotificationsProvider position="top-right">
            <div className="App scroll-smooth">
              <div className="min-h-screen relative">
                <Navbar />
                <Event />
                <div className="absolute bottom-0  w-full">
                  <Waves />
                </div>
              </div>
              <div>
                <Form />
              </div>
            </div>
          </NotificationsProvider>
        }
      />
    </Routes>
  );
}

export default App;
