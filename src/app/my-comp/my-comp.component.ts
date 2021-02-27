import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  id: string = "";
  selectedPokeId:number = 0 ;
  
  pokemons: Pokemon[] = [
    new Pokemon(1, "Pokelo"),
    new Pokemon(2, "Pokeblack"),
    new Pokemon(3, "Pokedous"),
    new Pokemon(4, "Pokeucrus"),
    new Pokemon(5, "Pokelio"),
    new Pokemon(6, "Pokemoul"),
  ]


  constructor() {
  }
  


  ngOnInit(): void {
  }

}
