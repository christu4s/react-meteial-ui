import './App.css';
import Home from './component/Pages/Home';
import Tour from './component/Pages/Tour';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Tour />}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
   
  );
}

export default App;
