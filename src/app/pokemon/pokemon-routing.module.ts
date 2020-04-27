import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';


const routes: Routes = [
  {
    path: "pokemons/list", component : PokemonListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
