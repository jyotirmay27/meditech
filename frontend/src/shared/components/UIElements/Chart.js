import React from "react";
import { Chart } from "react-google-charts";
 
function chart(props){
  return(<Chart
    width={'100%'}
    height={'100%'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['x', 'Normal', 'Your Value'],
      [0, props.points[8], props.points[8]],
      [1, props.points[8],props.points[0]],
      [2, props.points[8], props.points[1]],
      [3, props.points[8], props.points[2]],
      [4, props.points[8], props.points[3]],
      [5, props.points[8], props.points[4]],
      [6, props.points[8], props.points[5]],
      [7, props.points[8], props.points[6]],
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