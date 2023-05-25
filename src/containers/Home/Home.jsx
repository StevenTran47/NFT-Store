import 'App.css'
import { PrimaryLayout } from "components/Layout";
import { Widget } from 'components/Widget';
import { Creater } from 'components/Creater';
const Home = () => {
    return(
      <PrimaryLayout>
        <Widget></Widget>
        <Creater></Creater>
      </PrimaryLayout>       
    );
}
export default Home;