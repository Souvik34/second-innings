// write an areact functional component using chart.js to craete a polar chart with 3 colour variation

import React, { Component } from "react";
import Chart from "chart.js";
class myChart extends Component {
  componentDidMount() {
    var ctx = document.getElementById("polar-area");
    // Global Options:
    Chart.defaults.global.defaultFontFamily = "'Nunito', sans-serif";
    (function () {
      // Local options override for this instance only
      var myPieChart = new Chart(ctx, {
        type: "polarArea",
        data: {
          labels: ["Red", "Green", "Yellow"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    })();

    <canvas id="polar-area"></canvas>;
  }
}
export default Chart;
