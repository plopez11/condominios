import { Component } from '@angular/core';
import { BillingNoticeService } from '../services/billing-notice.service';
import { BillingDetailService } from '../services/billing-detail.service';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../interfaces/interfaces';
import { BillingNotice } from '../interfaces/interfaces';
import { BillingNoticeDetail } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  billingNotices: BillingNotice[] = [];
  billingNoticeDetail: BillingNoticeDetail[] = [];
  apartments: Apartment[] = [];

  constructor(private billingNoticeSrv: BillingNoticeService, 
              private billingDetailSrv: BillingDetailService,
              private apartmentSrv: ApartmentService) {}

  ngOnInit() {

    this.siguientes();
    // this.loadBillingDetails();
    this.loadApartments();  
  };
            
  ionViewWillEnter() {
      
  }
  
  ionViewDidEnter() {
    
  }
  
  Recargar(event?) {
    this.siguientes(event, true)
    
    this.apartments = [];
    this.loadApartments();
  }
  
  siguientes( event?, pull: boolean = false) {
    this.billingNoticeSrv.getBillingNotice(pull)
    .subscribe( resp => {
        // console.log('billingNotice:',resp.billingNotice);
        this.billingNotices.push(...resp.billingNotice);  
        
    });
    

  }

  loadBillingDetails( event?, pull: boolean = false) {
    this.billingDetailSrv.getBillingNoticeDetail(pull)
    .subscribe( resp => {
        console.log('Pagos:',resp.billingNoticeDetail);
        this.billingNoticeDetail.push(...resp.billingNoticeDetail);  
        
    });
    
  }
  
  loadApartments( event?, pull: boolean = false) {
    
    this.apartmentSrv.getApartment(pull=true)
    .subscribe( resp2 => {
        
        this.apartments.push(...resp2.apartment);
  
    });
  }
}
            
