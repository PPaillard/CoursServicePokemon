import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../common/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[]  = []

  constructor() { }

  ngOnInit(): void {
  }

}
