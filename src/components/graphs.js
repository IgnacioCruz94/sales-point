import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { selectInvoicesProducts } from "../Redux/selectors";
import { getInvoices } from '../Redux/invoicesThunks';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales point',
    },
  },
};

const labels = [ 'Total money'];
const labels2 = [ 'Total money'];


export default function Graph() {
  const invoicesData = useSelector(selectInvoicesProducts);
  const dispatch = useDispatch();
  React.useEffect(
    () =>{
      if(invoicesData.length === 0){
        dispatch(getInvoices());
      }
      // eslint-disable-next-line
    }, [invoicesData]
  );
  const salesCancelled = invoicesData.filter((status => status.status === false));
  const salesFinished = invoicesData.filter((status => status.status === true));

  const totalMoneySalesCancelled = salesCancelled.map(({ products }) => products).map((item) => {
    const total2 = item.map(({ price}) => price).reduce((sum, i) => sum + i, 0)
    return total2;
  });
  const totalMoneySalesFinished = salesFinished.map(({ products }) => products).map((item) => {
    const total2 = item.map(({ price}) => price).reduce((sum, i) => sum + i, 0)
    return total2;
  });

  const labelSalesA = totalMoneySalesCancelled.reduce((sum, i) => sum + i, 0);
  const labelSalesB = totalMoneySalesFinished.reduce((sum, i) => sum + i, 0);
 
  return (
      <div sx={{padding: "10px"}}>
          <Bar options={options} data={{
  labels,
  datasets: [
    {
      label: 'Sales',
      data: labels.map(() => labelSalesB),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Cancelled sales',
      data: labels2.map(() => labelSalesA),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}} />
      </div>
  
  )
}