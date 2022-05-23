import {
  AfterViewInit,
  Component,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { TransferService } from '../transfer.service';
import {
  LineSeries,
  XYChart
} from "@amcharts/amcharts4/charts";
// amChart4 imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { MarketDataModel } from '../marketData';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  public selectedLOB: string = "";
  public selectedTimeView: string = "";

  private _chart!: am4charts.XYChart;
  private _dateAxis: any;

  constructor(private _transferSvc: TransferService) { }

  ngOnInit(): void {
    this.selectedLOB = this._transferSvc.selectedLOB;
    this.selectedTimeView = this._transferSvc.selectedTimeView;
  }

  ngAfterViewInit() {

    am4core.useTheme(am4themes_animated);

    let chart = am4core.create('chartDiv', am4charts.XYChart);
    this._chart = chart;
    this._chart.data = [];

    let title = chart.titles.create();
    title.text = "Weekly Units Sold for LOB: " + this.selectedLOB;
    title.fontSize = 15;
    title.marginBottom = 30;

    chart.data = [
      {
        "date": new Date(2022, 5, 1),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 5, 8),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 5, 15),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 5, 21),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 5, 29),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 6, 5),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 6, 12),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 6, 19),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 6, 26),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 7, 2),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 7, 9),
        "units": this.randomNumber(500, 1500)
      },
      {
        "date": new Date(2022, 7, 16),
        "units": this.randomNumber(500, 1500)
      }];

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.title.text = "Week";
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.tooltipDateFormat = "yyyy-MM-dd";

    let unitValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    unitValueAxis.title.text = "Units Sold";

    let lobSeries = chart.series.push(new am4charts.LineSeries());
    lobSeries.name = "Units";
    lobSeries.stroke = am4core.color("#CDA2AB");
    lobSeries.strokeWidth = 3;
    lobSeries.dataFields.valueY = "units";
    lobSeries.dataFields.dateX = "date";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = this._dateAxis;
    chart.cursor.lineY.disabled = true;
    chart.cursor.snapToSeries = [
      lobSeries
    ];

    chart.scrollbarX = new am4core.Scrollbar();

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.background.fill = am4core.color("#000");
    // chart.legend.contentAlign = 'right';
    chart.background.fill = am4core.color("#FFF");
    chart.background.fillOpacity = 0.02;

  }

  ngOnDestroy() {
    if (this._chart) {
      this._chart.dispose();
    }
    if (this._chart.data) {
      this._chart.data = [];
    }
  }

  randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  randomString(length: number, chars: string) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  generateRandomMarketData(): MarketDataModel[] {
    let toReturn: MarketDataModel[] = [];
    for (let i = 0; i < 10; i++) {
      let toAdd: MarketDataModel = {
        marketDataId: i,
        region: this.randomString(4, 'abcdefghijklmnopqrstucvwxyz'),
        country: this.randomString(10, 'abcdefghijklmnopqrstucvwxyz'),
        year: this.randomNumber(1990, 2022),
        month: this.randomNumber(1, 12),
        quarter: this.randomNumber(1, 4),
        businessSegment: this.randomString(10, 'abcdefghijklmnopqrstucvwxyz'),
        productLine: this.randomString(10, 'abcdefghijklmnopqrstucvwxyz'),
        lob: this.selectedLOB,
        units: this.randomNumber(1000, 100000)
      };
      toReturn.push(toAdd);
    }
    return toReturn;
  }
}
