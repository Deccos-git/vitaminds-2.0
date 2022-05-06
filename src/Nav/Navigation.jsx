import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";

const Navigation = () => {
  return (
    <div>
        <Routes>
            <Route path={`/`} element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default Navigation