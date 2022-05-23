import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { TransferService } from './transfer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public defaultAllLOBs: string[] = [
    "Inspiron",
    "Alienware",
    "G-Series",
    "Vostro",
    "XPS"
  ];

  public selectedTimeView: string = "";
  public selectedLOB: string = "";
  public displayChart: boolean = false;

  constructor(private transferSvc: TransferService) { }

  startupChart(event:any) {
    this.transferSvc.selectedLOB = this.selectedLOB;
    this.transferSvc.selectedTimeView = this.selectedTimeView;
    this.displayChart = true;
  }

  userStoryLink() {
    window.open("https://www.pivotaltracker.com/story/show/182210651");
  }
}
