import { Component, Input, OnInit } from '@angular/core';
import { Apartment } from '../../interfaces/interfaces';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
})
export class ApartmentComponent implements OnInit {
  @Input() apartment : Apartment = {};
  constructor() { }

  ngOnInit() {}

}
