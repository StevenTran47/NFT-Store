import 'App.css'
import { PrimaryLayout } from "components/Layout";
import { Widget } from 'components/Widget';
import { DashBoard } from 'components/DashBoard';
const Home = () => {
    return(
      <PrimaryLayout>
        <Widget></Widget>
        <DashBoard></DashBoard>
      </PrimaryLayout>       
    );
}
export default Home;