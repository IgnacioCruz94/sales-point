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
import faker from 'faker';
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

const labels = ['Total sales', 'Total money'];
const labels2 = ['Total cancelled sales', 'Total money'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Cancelled sales',
      data: labels2.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Graph() {
  const invoicesData = useSelector(selectInvoicesProducts);
  const dispatch = useDispatch();
  React.useEffect(
    () =>{
      if(invoicesData.length === 0){
        dispatch(getInvoices());
      }
      console.log(invoicesData)
      // eslint-disable-next-line
    }, [invoicesData]
  );
  //const total = invoicesData.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  const total = invoicesData.map(({ products }) => products).map(elemento => elemento)
  //console.log(total);
  return (
      <div sx={{padding: "10px"}}>
          <Bar options={options} data={data} />
      </div>
  
  )
}