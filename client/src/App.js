import Nevbar from "./components/Nevbar";
import Templates from "./components/Templates";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GetLogin from "./components/GetLogin";
import GetRegister from "./components/GetRegister";
import Login from "./components/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/Home";
import Admin from "./components/Admin";
import { useContext } from "react"; 
import { DataContext } from "./context/DataProvider";

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
          <Route path="Admin" element={<ProtectedAdmin/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

function ProtectedAdmin() {
  const { account } = useContext(DataContext);
  if (account === "admin") {
    return <Admin />; 
  } else {
    // return <Navigate to="/" replace={true} />;
  }
}

export default App;