import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
// import { Url } from 'url';
import { environment } from '../../environments/environment';
import { RespuestaBillingNotices, BillingNotice } from '../interfaces/interfaces';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class BillingNoticeService {
  
  paginaBillingNotices = 0;
  nuevoBillingNotices = new EventEmitter<BillingNotice>();
  constructor(private http: HttpClient) { }

  getBillingNotice(pull: boolean = false) {
    if (pull) {
      this.paginaBillingNotices = 0
    }
    this.paginaBillingNotices ++;
    return this.http.get<RespuestaBillingNotices>(`${URL}/billingNotice/?pagina=${this.paginaBillingNotices}`);
  }

}
