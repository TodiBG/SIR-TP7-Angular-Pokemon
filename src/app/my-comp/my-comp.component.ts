import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  id: string = "";
  selectedPokeId: number = 0;
  fliterValue: string  = "";
  
  pokemons: Pokemon[] = [
    new Pokemon(1, "Pokelo"),
    new Pokemon(2, "Pokeblack"),
    new Pokemon(3, "Pokedous"),
    new Pokemon(4, "Pokeucrus"),
    new Pokemon(5, "Pokelio"),
    new Pokemon(6, "Miopketo"),
    new Pokemon(7, "Babul"),
    new Pokemon(8, "Totcrus"),
    new Pokemon(9, "spataus"),
    new Pokemon(10, "keanin"),
    new Pokemon(11, "Possiekan"),
    new Pokemon(12, "Jeanopok"),
    new Pokemon(13, "Yaopokedrol"),
  ]


  constructor() {
  }
  


  ngOnInit(): void {
  }

}
