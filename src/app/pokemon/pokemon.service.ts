import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = environment.baseUrl + 'pokemons';
  constructor(private http: HttpClient) { }
  getBlogs(): Observable<Pokemon[]> {
  return this.http.get<Pokemon[]>(this.apiUrl);
  }
}
