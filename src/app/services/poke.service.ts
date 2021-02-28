import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeServiceRes } from '../models/pokemon';

const base_url = "https://pokeapi.co/api/v2/pokemon/";

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  
  constructor(private http: HttpClient) { }


  getPokemons():Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes> (base_url);
  }

  getPokemonInfos(id:string):Observable<any> {
    return this.http.get(base_url+id+"/");
  }

}
