import Home from 'containers/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'
import Login from 'containers/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />     
        <Route  path="/login" element={<Login/>} />       
        

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
