import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dictionary } from '../models/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  constructor() { }

  getAllDictionaries(): Observable<Dictionary[]> {
    return of([
      new Dictionary(1, 'P'),
      new Dictionary(2, 'A'),
      new Dictionary(3, 'C')
    ])
  }
}
