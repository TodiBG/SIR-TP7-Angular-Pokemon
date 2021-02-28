import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {
  private value = new Subject<string>();
  
  constructor() { }


  getObservableValue(): Subject<string>{
    return this.value;
  }

  setValue(value: string) {
    this.value.next(value);
  }

}
