import { Component, OnInit } from '@angular/core';
import {ReportingCaService} from '../../../services/reporting-ca.service';

@Component({
  selector: 'app-reporting-ca',
  templateUrl: './reporting-ca.component.html',
  styleUrls: ['./reporting-ca.component.css']
})
export class ReportingCaComponent implements OnInit {

  constructor(private reportingService: ReportingCaService) { }

  ca: any[];

  ngOnInit() {
    this.reportingService.getReportingCaData().subscribe(res => {this.ca = res; });
  }
}
