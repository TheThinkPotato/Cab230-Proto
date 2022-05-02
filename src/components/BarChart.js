import { Bar } from "react-chartjs-2";
import { Chart as chartJS} from 'chart.js/auto'

export function BarChart(props) {
  console.log(props);
  return <Bar data={props.data}/>
  
}

export default BarChart;