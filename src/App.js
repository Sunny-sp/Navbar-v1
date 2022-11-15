import { Link, Route, Routes } from "react-router-dom";
import Employee from "./Employee";
import Valorant from "./Valorant";
import Login from "./Login";

function App() {
  return (
    <>
    <nav>
        <Link to="/">login</Link>  |
        <Link to="employee">employee</Link>|
        <Link to="valorant">valorant</Link>|
    </nav>
      <Routes>
        <Route path="employee" element={<Employee />} />
        <Route path="valorant" element={<Valorant />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
