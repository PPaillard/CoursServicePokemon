import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from './container.model';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl : String = "https://api.pokemontcg.io/v1"

  constructor(private httpClient : HttpClient) { }

  getPokemons() : Observable<Pokedex>{
    return this.httpClient.get<Pokedex>(`${this.apiUrl}/cards`);
  }
}
