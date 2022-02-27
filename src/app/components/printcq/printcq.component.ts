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



  constructor(private printcqservice : PrintcqService) {}

  insertPayto: string | undefined;
  insertPaydate: string | undefined;
  amount!: number;
  remarks: string | undefined;

  ngOnInit(): void {
  }

  insertButton(){
    let x: Input1Model = new Input1Model();

  }

  // x.payto = this.insertPayto ?? "";

}
