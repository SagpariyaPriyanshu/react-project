import Nevbar from "./components/Nevbar";
import Templates from "./components/Templates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetLogin from "./components/GetLogin";
import GetRegister from "./components/GetRegister";
import Login from "./components/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/Home";

function App() {
  return (
    <DataProvider> 
      <BrowserRouter>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Templates" element={<Templates/>} />
          <Route path="GetLogin" element={<GetLogin/>} />
          <Route path="GetRegister" element={<GetRegister/>} />
          <Route path="Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
