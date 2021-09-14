import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HpService {

  constructor(private http:HttpClient) { }

  getCharacters():Observable<CharacterData[]>{
    return this.http.get<CharacterData[]>('http://hp-api.herokuapp.com/api/characters')
  }
}
