import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListarComponent } from './pokemon/pokemon-listar/pokemon-listar.component';


const routes: Routes = [
  {
    path: "", component : PokemonListarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
