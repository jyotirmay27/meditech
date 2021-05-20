import React from "react";
import { Chart } from "react-google-charts";
 
function chart(props){
  return(<Chart
    width={'95%'}
    height={'95%'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['x', 'Normal', 'Your Value'],
      [0, 90, 90],
      [1, 90, props.points[0]],
      [2, 90, props.points[1]],
      [3, 90, props.points[2]],
      [4, 90, props.points[3]],
      [5, 90, props.points[4]],
      [6, 90, props.points[5]],
      [7, 90, props.points[6]],
    ]}
    options={{
      hAxis: {
        title: 'Date',
        gridlines: {count:7}
      },
      vAxis: {
        title: props.points[7],
      },
      animation: {
        startup: true,
        easing: 'out',
        duration: 1000,
      },
      series:{
        1: {curveType: 'function'}
      }
    }}
    rootProps={{ 'data-testid': '2' }}
  />);
 }
export default chart;