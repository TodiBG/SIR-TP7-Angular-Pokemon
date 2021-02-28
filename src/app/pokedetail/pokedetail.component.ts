import { Component, Input, OnInit } from '@angular/core';
import { PokeDetail } from '../models/pokemon';
import { PokeShareInfoService } from '../services/poke-share-info.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

  @Input()
  detail: PokeDetail | any;

  constructor( private pokeShareInfoService: PokeShareInfoService ) { }

  ngOnInit(): void {
    this.pokeShareInfoService.getObservableValue().subscribe((data) => {
      console.log( "PokeDetail : "+ data );
    });

    
  }

}
