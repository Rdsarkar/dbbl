import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChequeComponent } from './components/cheque/cheque.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrintcqComponent } from './components/printcq/printcq.component';
import { ReportcqComponent } from './components/reportcq/reportcq.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChequeComponent,
    PrintcqComponent,
    ReportcqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
