import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokeService } from '../services/poke.service';

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
  ]


  constructor( private pokeService: PokeService) {
  }
  


  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      const res = data.results as any[];
      
      console.log(res.length +" pokémons")

      res.forEach((e, index) => {
        this.pokemons.push(new Pokemon(index+1,e.name, e.url));
      });

    } ) ;
  }


  go() {
    console.log("selected : " + this.selectedPokeId);
  }

}
