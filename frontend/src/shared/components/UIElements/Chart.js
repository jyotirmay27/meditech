import React from "react";
import { Chart } from "react-google-charts";
 
function chart(){
  return(<Chart
    width={'600px'}
    height={'400px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['x', 'Normal', 'Your BP'],
      [0, 90, 90],
      [1, 90, 85],
      [2, 90, 100],
      [3, 90, 90],
      [4, 90, 95],
      [5, 90, 85],
      [6, 90, 100],
      [7, 90, 80],
    ]}
    options={{
      hAxis: {
        title: 'Date',
        gridlines: {count:7}
      },
      vAxis: {
        title: 'BP',
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
    // chartEvents={[
    //   {
    //     eventName: 'animationfinish',
    //     callback: () => {
    //       console.log('Animation Finished')
    //     },
    //   },
    // ]}
    rootProps={{ 'data-testid': '2' }}
  />);
 }
export default chart;