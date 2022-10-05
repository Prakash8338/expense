
import './Chart.css'
import ChartBar from './ChartBar';
const Chart = (props) => {
  const dataV = props.dataPoints.map(datapoint => datapoint.value);
  const maxV = Math.max(...dataV);
  return (
    <div className = "chart">
      {props.dataPoints.map(dataPoint => 
      <ChartBar key = {dataPoint.label}
                value = {dataPoint.value}
                maxValue = {maxV}
                label = {dataPoint.label}
      />)}
    </div>


  );

}

export default Chart;