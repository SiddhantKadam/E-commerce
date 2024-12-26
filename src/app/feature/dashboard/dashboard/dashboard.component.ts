import { Component } from '@angular/core';
import { ChartService } from 'src/app/shared/services/charts/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chartOptions: any;

  constructor(private chartService: ChartService) {
    this.chartOptions = {
      title: {
        text: 'ECharts Example',
      },
      tooltip: {},
      xAxis: {
        data: ['Category1', 'Category2', 'Category3', 'Category4'],
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [5, 20, 36, 10],
        },
      ],
    };
  }

}
