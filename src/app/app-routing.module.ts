import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChequeComponent } from './components/cheque/cheque.component';
import { PrintcqComponent } from './components/printcq/printcq.component';
import { ReportcqComponent } from './components/reportcq/reportcq.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'input',
    pathMatch: 'full'
  },
  {
    path: 'input',
    component: PrintcqComponent
  },
  {
    path: 'output',
    component: ChequeComponent
  },
  {
    path: 'report',
    component: ReportcqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
