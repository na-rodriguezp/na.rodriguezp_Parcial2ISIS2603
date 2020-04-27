import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { dataPokemons } from '../dataPokemons';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  private pokemons: Array<Pokemon>;
  getPokemonList(): Array<Pokemon> {
    return dataPokemons;
  }
  ngOnInit() {
    this.pokemons = this.getPokemonList();
  }

}
