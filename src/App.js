import About from 'containers/About';
import Home from 'containers/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />     
        <Route  path="/about" element={<About/>} />       
        

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
