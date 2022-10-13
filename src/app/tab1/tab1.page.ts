import { Component, OnInit } from '@angular/core';
import { PositionsService } from '../services/positions.service';
import { ApartmentService } from '../services/apartment.service';
import { Position } from '../interfaces/interfaces';
import { Apartment } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  positions: Position[] = [];
  apartments: Apartment[] = [];
  habilitado = true;

  constructor( private positionSrv: PositionsService, private apartmentSrv: ApartmentService) {}

  ngOnInit() {
    
    this.siguientes();
    this.loadApartments();

    // this.positionSrv.nuevoPosition
    // .subscribe(position=> {
    //     this.positions.unshift(position);
    // });
  
};
  
  ionViewWillEnter() {
    
  }
  
  ionViewDidEnter() {
    
  }

  Recargar(event?) {
    this.siguientes(event, true)
    this.habilitado = true;
    this.positions = [];
  }

  siguientes( event?, pull: boolean = false) {
    this.positionSrv.getPositions(pull)
    .subscribe( resp => {
        
        this.positions.push(...resp.position);

      // if ( event ) {
      //   event.target.complete();
      // }

      //   if ( resp.positions.length === 0) {
      //     this.habilitado = false;
      //     // event.target.disabled = true;
      //   }
      
      
    });

  }

  loadApartments( event?, pull: boolean = false) {
    
    this.apartmentSrv.getApartment(pull)
    .subscribe( resp => {
        
        this.apartments.push(...resp.apartment);
  
    });
  }
}
