import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PositionsComponent } from './positions/positions.component';
import { PositionComponent } from './position/position.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsComponent } from './payments/payments.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentComponent } from './apartment/apartment.component';

import { BillingNoticeComponent } from './billing-notice/billing-notice.component';
import { BillingNoticesComponent } from './billing-notices/billing-notices.component';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';

@NgModule({
  declarations: [
    PositionsComponent,
    PositionComponent,
    PaymentsComponent,
    PaymentComponent,
    ApartmentsComponent,
    ApartmentComponent,
    BillingNoticeComponent,
    BillingNoticesComponent,
    BillingDetailComponent, 
    BillingDetailsComponent],
  exports:[
    PositionsComponent,
    PaymentsComponent,
    PaymentComponent,
    ApartmentsComponent,
    ApartmentComponent,
    BillingNoticeComponent,
    BillingNoticesComponent,
    BillingDetailComponent, 
    BillingDetailsComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
