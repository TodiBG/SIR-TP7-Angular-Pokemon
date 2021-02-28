import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeDetail } from '../models/pokemon';
import { PokeService } from '../services/poke.service';
import { PokeShareInfoService } from '../services/poke-share-info.service';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  id: string = "";
  selectedPokeId: string = "";
  fliterValue: string = "";
  pokeDetail: PokeDetail|any; 
  pokemons: Pokemon[] = []


  constructor(
    private pokeService: PokeService,
    private pokeShareInfoService: PokeShareInfoService) {
    
    }
  


  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        const i = index + 1;
        this.pokemons.push(new Pokemon(""+i, e.name, e.url));
      });

    });
    

   

  }


  go() {
    this.pokeShareInfoService.setValue(this.selectedPokeId);
    this.pokeService.getPokemonInfos(this.selectedPokeId).subscribe((data) => {  
      this.pokeDetail = data;
    });
  }

}
