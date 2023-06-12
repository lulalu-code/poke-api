import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';
import { PokemonMeta } from '../models/pokemon.interface';
import { SharedService } from './shared.service';

interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonMeta[];
};

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getPokemonById(id:string): Observable<Pokemon> {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}
