import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js';
import Course from './pages/Course.js';
import About from './pages/About.js';
import Price from './pages/Price.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Course/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/price' element={<Price/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;