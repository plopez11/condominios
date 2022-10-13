import { Component,Input, OnInit } from '@angular/core';
import { Payment } from '../../interfaces/interfaces';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  @Input() payments : Payment[] = [];
  constructor() { }

  ngOnInit() {
    console.log('En Payments component',this.payments);
  }

}
