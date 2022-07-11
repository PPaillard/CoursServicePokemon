import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../common/container.model';
import { Pokemon } from '../common/pokemon.model';
import { PokemonService } from '../common/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[]  = []

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(
      (pokedex:Pokedex) => {
        this.pokemons = pokedex.cards
      },
      (error) => {
        console.log("Passage dans le traitement d'erreur : ", error);
      },
      ()=> {
        console.log("Après TOUT !")
      }
    )
  }

}
