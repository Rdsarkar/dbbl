import { Injectable } from '@angular/core';
import { Res } from '../model/res.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input1Model } from '../model/input1.model'

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PrintcqService {

  constructor(private httpClient: HttpClient) {
  }

  baseUrl: string = 'http://localhost:3000/';
  ShowKori(x: Input1Model){
    
  }

  CreateKori(x: Input1Model) {
    return this.httpClient.post<Res>(this.baseUrl + "c", x, headerOption);
  }

  GetByDateRange(date_from: string = "", date_to: string = "") {
    let requestBody = {
      payDateFrom: date_from,
      payDateTo: date_to
    }
    return this.httpClient.post<any[]>(this.baseUrl + "GetFreshChequeByDateRange", requestBody, headerOption);
  }
}
