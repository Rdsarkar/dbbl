import { Component, OnInit } from '@angular/core';
import { PrintcqService } from './service/printcq.service';
import { Res } from './model/res.model';
import { Input1Model } from './model/input1.model';


@Component({
  selector: 'app-printcq',
  templateUrl: './printcq.component.html',
  styleUrls: ['./printcq.component.css']
})
export class PrintcqComponent implements OnInit {

  insertPayto: string | undefined;
  insertPaydate: string | undefined;
  insertamount!: number;
  insertremarks: string | undefined;

  // dateFrom: Date = new Date();
  // dateTo: Date = new Date();

  dateFrom: string = [new Date().getFullYear(), ('0' + (new Date().getMonth() + 1)).slice(-2), ('0' + new Date().getDate()).slice(-2)].join('-');
  dateTo: string = [new Date().getFullYear(), ('0' + (new Date().getMonth() + 1)).slice(-2), ('0' + new Date().getDate()).slice(-2)].join('-');

  loadPaydate: string = [new Date().getFullYear(), ('0' + (new Date().getMonth() + 1)).slice(-2), ('0' + new Date().getDate()).slice(-2)].join('-');

  isDateRangeEnabled: boolean = true;
  displayList: any[] = []

  constructor(private printcqservice: PrintcqService) { }
  insertdata: Input1Model[] = [];



  ngOnInit(): void {

  }



  onGetDataButtonClick() {
    if (this.isDateRangeEnabled == true) {
      this.printcqservice.GetByDateRange(this.dateFrom, this.dateTo).subscribe(
        (zafir) => {
          this.displayList = zafir;
        }
      );
    } else {
      this.printcqservice.GetByDateRange("", "").subscribe(
        (zafir) => {
          this.displayList = zafir;
        }
      );
    }
  }

  getFormattedNumber(x: number): string {
    if (x) {
      return x.toLocaleString('en', { useGrouping: true });
    }
    return "0";
  }

  getFormattedDate(newDate: string): string {
    if (new Date(newDate)) {
      return [('0' + new Date(newDate).getDate()).slice(-2), ('0' + (new Date(newDate).getMonth() + 1)).slice(-2), new Date(newDate).getFullYear()].join('/');
    }
    else {
      return '';
    }
  }





  insertButton() {
    let x: Input1Model = new Input1Model();
    x.payto = this.insertPayto ?? "";
    x.paydate = this.insertPaydate ?? "";
    x.amount = this.insertamount ?? 0;
    x.remarks = this.insertremarks ?? "";

    // (zafir) => {
    //   // window.location.reload();

    //   //client
    //   this.insertdata.push(x);


    // },
    // (lol) => {

    // }
  }

  // x.payto = this.insertPayto ?? "";

}
