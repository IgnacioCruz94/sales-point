import Graphs from '../components/graphs';
import Graphs2 from '../components/GraphTotalSales';
import './Cart.css';
function Dashboard() {
  return (
    <div/*  className="Dashboard" */>
        {/* <section > */}
            <Graphs/>
            <Graphs2/>
        {/* </section>  */}
    </div>
  );
}
export default Dashboard;