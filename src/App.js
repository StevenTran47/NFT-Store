import Home from 'containers/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'
import Login from 'containers/Login';
import About from 'containers/About';
import Bids from 'containers/Bids';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />     
        <Route  path="/login" element={<Login/>} />       
        <Route  path="/about" element={<About/>} />  
        <Route  path="/bids" element={<Bids/>} />       

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
