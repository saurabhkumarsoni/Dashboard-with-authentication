import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);



@Component({
  selector: 'app-widget-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {

  chartOptions= {};
  Highcharts = Highcharts;
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {

      chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
      },
    
      legend: {
        enabled: false
      },
    
      title: {
        text: 'Sugar and fat intake per country'
      },
    
      subtitle: {
        text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
      },
    
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
        }
      },
    
      xAxis: {
        gridLineWidth: 1,
        title: {
          text: 'Daily fat intake'
        },
        labels: {
          format: '{value} gr'
        },
        plotLines: [{
          color: 'black',
          dashStyle: 'dot',
          width: 2,
          value: 65,
          label: {
            rotation: 0,
            y: 15,
            style: {
              fontStyle: 'italic'
            },
            text: 'Safe fat intake 65g/day'
          },
          zIndex: 3
        }],
        accessibility: {
          rangeDescription: 'Range: 60 to 100 grams.'
        }
      },
    
      yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
          text: 'Daily sugar intake'
        },
        labels: {
          format: '{value} gr'
        },
        maxPadding: 0.2,
        plotLines: [{
          color: 'black',
          dashStyle: 'dot',
          width: 2,
          value: 50,
          label: {
            align: 'right',
            style: {
              fontStyle: 'italic'
            },
            text: 'Safe sugar intake 50g/day',
            x: -10
          },
          zIndex: 3
        }],
        accessibility: {
          rangeDescription: 'Range: 0 to 160 grams.'
        }
      },
    
      tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
          '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
          '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
          '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
        footerFormat: '</table>',
        followPointer: true
      },
    
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
    
      series: [{
        data: this.data
      }]
    
    }
  HC_exporting(Highcharts);
  setTimeout(() =>{
    window.dispatchEvent(
      new Event('resize')
    ), 3000
  })
  }
}
