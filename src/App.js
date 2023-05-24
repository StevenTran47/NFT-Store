import Home from 'containers/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />       
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
