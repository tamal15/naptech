import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Homes/Home/Home';

function App() {
  return (
    <div>
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      
       
      
      </Routes>
     
    </Router>
  </div>
  );
}

export default App;
