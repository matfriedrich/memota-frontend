import { Injectable } from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Transaction} from '../models/Transaction';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  websocketUrl = 'ws://localhost:3001';
  public transactions$: Observable<Transaction[]>;

  constructor(private websocketService: WebsocketService) {
    this.transactions$ = new Observable((observer) => {
      const connection = websocketService.connect(this.websocketUrl);
      connection.subscribe((event: any) => {
        const data: Transaction[] = JSON.parse(event.data);
          observer.next(data);

        }, (err: any) => {
          console.log(err);
          observer.error(err);
        },
        () => {
          console.log('complete');
          observer.complete();
        });
    });

  }
}
