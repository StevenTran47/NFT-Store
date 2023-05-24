import 'App.css'
import { PrimaryLayout } from "components/Layout";
import { Card } from 'components/Card';

const Home = () => {
    return(
      <PrimaryLayout>
        <div className='wrapper'>
          <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
          <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
          <Card title={"Roi"} content="+14.02" percent={-5.1}></Card>
          <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
        </div>
      </PrimaryLayout>       
    );
}
export default Home;