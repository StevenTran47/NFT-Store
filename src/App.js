import './App.css';
import { Card } from 'components/Card';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='wrapper'>
          <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
          <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
          <Card title={"Roi"} content="+14.02" percent={-5.1}></Card>
          <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
        </div>
      </header>
    </div>
  );
}

export default App;
