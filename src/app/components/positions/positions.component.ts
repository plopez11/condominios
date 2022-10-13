import { Component, OnInit, Input } from '@angular/core';
import { Position } from '../../interfaces/interfaces';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss'],
})
export class PositionsComponent implements OnInit {
  @Input() positions : Position[] = [];

  constructor() { }

  ngOnInit() {
    // console.log('En positions component',this.positions);

  }

}
