import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../../interfaces/interfaces';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'],
})
export class ApartmentsComponent implements OnInit {
  @Input() apartments : Apartment[] = [];
  constructor() { }

  ngOnInit() {}

}
