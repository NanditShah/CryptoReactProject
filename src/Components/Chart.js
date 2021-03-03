import React from "react";
import { Line } from "react-chartjs-2";

function Chart({data}) {
  return (
    <div>
      <Line
      style={{fontFamily:"recursive"}}
        data={{
          labels: data.map((entry) => {
            var d = new Date(entry[0]);
            return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
          }),

          datasets: [
            {
              data: data.map((entry) => entry[1]),
              label: "Prices",
              lineTension: 2,
              backgroundColor: '#801336',
              borderColor: "red",
              borderWidth: 2,
              fill: true,
            },
          ],
        }}
        options={{
            legend:{
              display:false,
            },
            scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                },
                ticks: {
                  fontColor: "white",
                  fontFamily:'recursive'
                }
            }],
            xAxes: [{
              
                gridLines: {
                    display: true,
                    
                },
                ticks: {
                  fontColor: "white",
                  fontFamily:'recursive'
                }
            }]
        }
          }}
      />
    </div>
  );
}

export default Chart;
