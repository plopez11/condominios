import { Component, OnInit, Input } from '@angular/core';
import { BillingNoticeDetail } from '../../interfaces/interfaces';

@Component({
  selector: 'app-billing-detail',
  templateUrl: './billing-detail.component.html',
  styleUrls: ['./billing-detail.component.scss'],
})
export class BillingDetailComponent implements OnInit {
  @Input() billingNoticeDetail : BillingNoticeDetail = {};
  constructor() { }

  ngOnInit() {}

}
