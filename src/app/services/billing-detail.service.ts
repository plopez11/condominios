import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
// import { Url } from 'url';
import { environment } from '../../environments/environment';
import { RespuestaBillingNoticeDetails, BillingNoticeDetail } from '../interfaces/interfaces';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class BillingDetailService {

  paginabillingNoticeDetail = 0;
  billID: String ='';
  nuevoBillingNoticesDetail = new EventEmitter<BillingNoticeDetail>();
  constructor(private http: HttpClient) { }

  getBillingNoticeDetail(pull: boolean = false) {
    if (pull) {
      this.paginabillingNoticeDetail = 0
    }
    this.paginabillingNoticeDetail ++;
    return this.http.get<RespuestaBillingNoticeDetails>(`${URL}/billingNoticeDetail/?pagina=${this.paginabillingNoticeDetail}`);
  }

  getBillingNoticeDetailById(pull: boolean = false,billId: String) {
    this.billID=billId;
    if (pull) {
      this.paginabillingNoticeDetail = 1;    
    }
    console.log('getBillingNoticeDetailById',this.billID)
    
    return this.http.get<RespuestaBillingNoticeDetails>(`${URL}/billingNoticeDetail/notice/${this.billID}`);
  }
}
