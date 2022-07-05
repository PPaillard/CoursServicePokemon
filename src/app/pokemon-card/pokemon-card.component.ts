import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../common/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon : Pokemon | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
