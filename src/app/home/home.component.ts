import { Component, OnInit } from '@angular/core';
import {IotaService} from '../services/iota.service';
import {Transaction} from '../models/Transaction';
import {TransactionService} from '../services/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newTxs: Transaction[];
  constructor(private iotaService: IotaService, private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.transactions$.subscribe((data: Transaction[]) => {
      alert('new tx:' + data[0].hash);
    });
  }

  public getNewTransactions() {
    this.iotaService.getNewTransactions().subscribe((data: Transaction[]) => {
      this.newTxs = data;
    });
  }

}
