import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

// import { Url } from 'url';
import { environment } from '../../environments/environment';
import { RespuestaApartments, Apartment } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  paginaApartment = 0;
  nuevoApartment = new EventEmitter<Apartment>();
  
  constructor(private http: HttpClient) { }

  getApartment(pull: boolean = false) {
    if (pull) {
      this.paginaApartment = 0
    }
    this.paginaApartment ++;
    
    return this.http.get<RespuestaApartments>(`${URL}/apartment/?pagina=${this.paginaApartment}`);
  }


}
