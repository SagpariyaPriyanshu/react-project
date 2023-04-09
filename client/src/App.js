import Nevbar from "./components/Nevbar";
import Templates from "./components/Templates";
import GetLogin from "./components/GetLogin";
import GetRegister from "./components/GetRegister";
import Login from "./components/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/Home";
import Components from "./components/Components";
import AdminPanel from "./components/AdminPanel";
import AdminButtonCompo from "./components/AdminButtonCompo";
import ButtonCompo from "./components/ButtonCompo";
import CheckboxCompo from "./components/CheckboxCompo";
import AdminCheckboxCompo from "./components/AdminCheckboxCompo";
import AdminUser from "./components/AdminUser";
import UserProfile from "./components/UserProfile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="Components" element={<Components/>} />
          <Route path="GetLogin" element={<GetLogin/>} />
          <Route path="GetRegister" element={<GetRegister/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="AdminPanel" element={<ProtectedAdmin/>} />
          <Route path="/AdminPanel/ButtonCompo" element={<ProtectedAdminBtn/>} />
          <Route path="/Components/ButtonCompo" element={<ButtonCompo/>} />
          <Route path="/AdminPanel/CheckboxCompo" element={<ProtectedAdminCheckbox/>} />
          <Route path="/Components/CheckboxCompo" element={<CheckboxCompo/>} />
          <Route path="/AdminPanel/User" element={<ProtectedAdminUser/>} />
          <Route path="/UserProfile" element={<ProtectedUserProfile/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

function ProtectedAdmin() {
  const { account } = useContext(DataContext);
  if (account === "admin") {
    return <AdminPanel />; 
  } else {
    return <Navigate to="/" replace={true} />;
  }
}
function ProtectedAdminBtn() {
  const { account } = useContext(DataContext);
  if (account === "admin") {
    return <AdminButtonCompo />; 
  }
  else{
    return <Home/>;
  }
    
}
function ProtectedAdminCheckbox() {
  const { account } = useContext(DataContext);
  if (account === "admin") {
    return <AdminCheckboxCompo />; 
  }
  else {
    return <Home/>;
  }
}
function ProtectedAdminUser() {
  const { account } = useContext(DataContext);
  if (account === "admin") {
    return <AdminUser />; 
  }
  else {
    return <Home/>;
  }
}
function ProtectedUserProfile() {
  const { account } = useContext(DataContext);
  if (account) {
    return <UserProfile />; 
  }
  else {
    return <Home/>;
  }
}

export default App;