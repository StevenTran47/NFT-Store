import { Children } from 'react';
import './App.css';
import { Button } from './components/Button'
import { Card } from './components/Card';

// import { Counter, Counter2 } from './components/Counter';
// import  Hello  from './components/Hello/Hello'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Counter name="Hung"/> 
        <BlackCounter name="Hung"/> */}
        <Button percent={5}>clickme</Button>
        <Button percent="-10"></Button>
        <Button percent="20"></Button>
        <Button percent="-30"></Button>
        <Card name="Revenue" values="5.00"></Card>
      </header>
    </div>
  );
}

export default App;
