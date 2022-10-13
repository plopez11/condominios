import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

// import { Url } from 'url';
import { environment } from '../../environments/environment';
import { RespuestaPositions, Position } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  paginaPositions = 0;
  nuevoPosition = new EventEmitter<Position>();
  
  constructor(private http: HttpClient) { }

  getPositions(pull: boolean = false) {
    if (pull) {
      this.paginaPositions = 0
    }
    this.paginaPositions ++;
    return this.http.get<RespuestaPositions>(`${URL}/position/?pagina=${this.paginaPositions}`);
  }

  // crearPost( post) {
  //   const headers = new HttpHeaders( {
  //     'x-token': this.usuarioSrv.token
  //   });

  //   return new Promise( resolve => {

  //     this.http.post(`${URL}/posts`, post, {headers})
  //     .subscribe(resp => {
  //       this.nuevoPost.emit(resp['Post']);
        
  //       resolve(true);
  //     });
  //   });
  // }
}
