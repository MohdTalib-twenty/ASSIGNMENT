import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/signup" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
