import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReportingCaService {

  constructor(
    private http: HttpClient
  ) { }

  getReportingCaData(): Observable<any> {
    return this.http.get<any>('/api/reporting');
  }

}
