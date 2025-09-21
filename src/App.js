import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Course from './pages/Course';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Course/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;