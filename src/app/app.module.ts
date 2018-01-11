import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { ReportingComponent } from './components/reporting/reporting.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReportingCaComponent } from './components/reporting/reporting-ca/reporting-ca.component';
import { DataTableModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    ReportingComponent,
    ReportingCaComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
