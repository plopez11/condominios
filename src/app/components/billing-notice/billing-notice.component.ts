import { Component, OnInit, Input } from '@angular/core';
import { BillingNotice } from '../../interfaces/interfaces';

@Component({
  selector: 'app-billing-notice',
  templateUrl: './billing-notice.component.html',
  styleUrls: ['./billing-notice.component.scss'],
})
export class BillingNoticeComponent implements OnInit {
  @Input() billingNotice : BillingNotice = {};
  billNoticeId: String ="";

  constructor() { }

  ngOnInit() {
    console.log('En BillingNoticeComponent',this.billingNotice);
    this.billNoticeId = this.billingNotice._id;
    console.log('En BillingNoticeComponent - billNoticeId',this.billNoticeId);
  }

}
