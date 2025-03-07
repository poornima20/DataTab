import './App.css';
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { Home, Lists, Downloads, Login} from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lists" element={<Lists />}></Route>
        <Route path="/downloads" element={<Downloads />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
