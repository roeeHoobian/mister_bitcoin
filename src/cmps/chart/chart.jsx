import React, { Component } from "react";
import Chart from "react-apexcharts";
import './chart.scss'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: this.props.title
        },
        xaxis: {
          categories: this.props.bitcoinRates.map(rate=> rate.y)
        }
      },
      series: [
        {
          data:this.props.bitcoinRates
        }
      ],
    };
  }
 

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
              <h2>{this.props.title}</h2>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type={this.props.type}
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;