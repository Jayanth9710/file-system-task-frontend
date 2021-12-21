import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import Folder from './Folder';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/folder" element={<Folder />}></Route>
    </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;
