import { Injectable } from '@angular/core';
import {Transaction} from '../models/Transaction';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IotaService {

  constructor(private http: HttpClient) { }

  getNewTransactions() {
    return this.http.get<Transaction[]>('http://localhost:3000/transaction');
  }
}
