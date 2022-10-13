import { Component, OnInit, Input } from '@angular/core';
import { BillingNotice } from '../../interfaces/interfaces';

@Component({
  selector: 'app-billing-notices',
  templateUrl: './billing-notices.component.html',
  styleUrls: ['./billing-notices.component.scss'],
})
export class BillingNoticesComponent implements OnInit {
  @Input() billingNotices : BillingNotice[] = [];
  constructor() { }

  ngOnInit() {}

}
