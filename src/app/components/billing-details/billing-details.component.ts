import { Component, OnInit, Input } from '@angular/core';
import { BillingNoticeDetail } from '../../interfaces/interfaces';
import { BillingDetailService } from '../../services/billing-detail.service';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss'],
})
export class BillingDetailsComponent implements OnInit {
  // @Input() billingNoticeDetails : BillingNoticeDetail[] = [];
  @Input() billingNoticesId : String = "";
  billingNoticeDetail: BillingNoticeDetail[] = [];

  constructor(private billingDetailSrv: BillingDetailService) { }

  ngOnInit() {
    console.log('En BillingDetailsComponent:',this.billingNoticesId);
    this.loadBillingDetails();
  }

  loadBillingDetails( event?, pull: boolean = false) {
    console.log('billDetail:',this.billingNoticesId);
    this.billingDetailSrv.getBillingNoticeDetailById(pull,this.billingNoticesId)
    .subscribe( resp => {    
        this.billingNoticeDetail.push(...resp.billingNoticeDetail);  
        
    });
    
  }

}
