import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
// import { Url } from 'url';
import { environment } from '../../environments/environment';
import { RespuestaPayments, Payment } from '../interfaces/interfaces';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  paginaPayments = 0;
  nuevoPayment = new EventEmitter<Payment>();
  constructor(private http: HttpClient) { }

  getPayments(pull: boolean = false) {
    if (pull) {
      this.paginaPayments = 0
    }
    this.paginaPayments ++;
    return this.http.get<RespuestaPayments>(`${URL}/pays/?pagina=${this.paginaPayments}`);
  }

  

}

