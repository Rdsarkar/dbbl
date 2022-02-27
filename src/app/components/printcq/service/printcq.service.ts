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

  baseUrl: string = 'https://localhost:3000/';
  CreateKori(x: Input1Model) {
    return this.httpClient.post<Res>(this.baseUrl + "c", x, headerOption);
  }
}
