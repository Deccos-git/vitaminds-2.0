import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Herstelacademies from "../Pages/Herstelacademies";
import OverOns from "../Pages/OverOns";
import Contact from "../Pages/Contact";

const Navigation = () => {
  return (
    <div>
        <Routes>
            <Route path={`/`} element={<Home/>}></Route>
            <Route path={`/herstelacademies`} element={<Herstelacademies/>}></Route>
            <Route path={`/over-ons`} element={<OverOns/>}></Route>
            <Route path={`/contact`} element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

export default Navigation