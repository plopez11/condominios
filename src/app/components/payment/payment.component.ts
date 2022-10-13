import { Component,Input, OnInit } from '@angular/core';
import { Payment } from '../../interfaces/interfaces';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @Input() payment : Payment = {};
  constructor() { }

  ngOnInit() {
    console.log('en PaymentComponent:',this.payment)
  }

}
