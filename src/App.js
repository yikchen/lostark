import Home from "./pages/Home";
import Hell from "./pages/Hell";
import Hidden from "./pages/Hidden";
import Fppl from "./pages/Fppl";
import Pug from "./pages/Pug";
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-wrap'>
        <BrowserRouter>
          <Routes>
            <Route index element= {<Home/>} />
            <Route path = "/home" element = {<Home />} />
            <Route path = "/hidden" element = {<Hidden />} />
            <Route path = "/hell" element = {<Hell />} />
            <Route path = "/fppl" element = {<Fppl />} />
            <Route path = "/pug" element = {<Pug />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
