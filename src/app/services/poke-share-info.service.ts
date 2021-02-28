import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {
  value: string = ""; 
  constructor() { }


  getValue(): string{
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  }

}
