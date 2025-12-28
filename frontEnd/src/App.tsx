import { Routes, Route } from "react-router";
import './App.css'
import Home from "./pages/Home";
import HandleUserInfo from "./pages/HandleUserInfo";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<HandleUserInfo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
