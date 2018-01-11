import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { ReportingComponent } from './components/reporting/reporting.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReportingCaComponent } from './components/reporting/reporting-ca/reporting-ca.component';
import { DataTableModule } from 'primeng/primeng';
import { FiltresComponent } from './components/filtres/filtres.component';
import { FiltresTierComponent } from './components/filtres/filtres-tier/filtres-tier.component';
import { FiltresDateComponent } from './components/filtres/filtres-date/filtres-date.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportingComponent,
    ReportingCaComponent,
    FiltresComponent,
    FiltresTierComponent,
    FiltresDateComponent
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
