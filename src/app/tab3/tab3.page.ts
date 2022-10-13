import { Component } from '@angular/core';
import { PaymentsService } from '../services/payments.service';
import { ApartmentService } from '../services/apartment.service';
import { Payment } from '../interfaces/interfaces';
import { Apartment } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  payments: Payment[] = [];
  apartments: Apartment[] = [];

  constructor(private paymentSrv: PaymentsService, 
              private apartmentSrv: ApartmentService) {}
  ngOnInit() {
    
    this.siguientes();
   
  
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
  console.log('Paso por siguientes')
  this.paymentSrv.getPayments(pull)
  .subscribe( resp => {
      console.log('Pagos:',resp.pays);
      this.payments.push(...resp.pays);  
      
  });
  this.loadApartments();
}

loadApartments( event?, pull: boolean = false) {
  
  this.apartmentSrv.getApartment(pull=true)
  .subscribe( resp2 => {
      
      this.apartments.push(...resp2.apartment);

  });
}
}
