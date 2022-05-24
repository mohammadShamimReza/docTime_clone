import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import ThreeEasySteps from './pages/landingPages/ThreeEasySteps';

function App() {
  return (
    <div className="App">
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/threeEasySteps' element={<ThreeEasySteps />} />
        </Routes>
    </div>
  );
}

export default App;
