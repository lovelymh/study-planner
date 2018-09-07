import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './Piechart.css';

class Piechart extends Component {

  render(){
  //  console.log('Piechart');
    const { studylist_chkrate } = this.props;

    const data = {
      labels: [
        '완료',
        '미완료'
      ],
      datasets: [{
        data: [studylist_chkrate.chk, studylist_chkrate.no_chk],
        backgroundColor: [
        '#91a7ff',
        '#ffa8a8'
        ],
        hoverBackgroundColor: [
          '#91a7ff',
          '#ffa8a8'
        ]
      }]
    };

    const options = {
       maintainAspectRatio: false,
       title: {
         display: true,
         text: '공부 완료율',
         fontSize: '20',
         fontColor: '#868e96'
       },
       legend: {
           labels: {
             boxWidth: 10
           }
       },
       tooltips: {
         callbacks: {
           label: function(tooltipItem, data) {
             let dataset = data.datasets[tooltipItem.datasetIndex];
             let meta = dataset._meta[Object.keys(dataset._meta)[0]];
             let total = meta.total;
             let currentValue = dataset.data[tooltipItem.index];
             let percentage = parseFloat((currentValue/total*100).toFixed(1));
             return `${currentValue} (${percentage}%)`;
         }
        }
       }
     }

    return(
     <div className="pie-chart" style={{height: '300px', width: '300px'}}>
       <Pie data={data} height={200} width={200} options={options}/>
     </div>
    );
  }
}

export default Piechart;
