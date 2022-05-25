import { Route, Routes } from 'react-router';
import './App.css';
import FAQS from './pages/FAQs/FAQS';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/FAQs' element={<FAQS />} />
        </Routes>
    </div>
  );
}

export default App;
