import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class HpService {

  constructor(private http:HttpClient) { }

  getCharacters():Observable<Characters[]>{
    return this.http.get<Characters[]>('http://hp-api.herokuapp.com/api/characters')
  }
}
