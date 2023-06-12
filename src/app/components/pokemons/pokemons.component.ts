import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { PokemonMeta } from 'src/app/models/pokemon.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{

  pokemons: PokemonMeta[] = [];
  showTable: boolean = false;

  constructor(
    private pokemonsService: PokemonsService,
    private sharedService: SharedService){}

  ngOnInit(): void {
    this.getPokemonList();
  }

getPokemonList() {
  return  this.pokemonsService
    .getAllPokemons()
    .subscribe((pokemons) => {
      this.pokemons = pokemons.results;
    });
  }

getPokemonId(url:string): string {
  return this.sharedService.getPokemonId(url)
}

 switchToTable(): void {
  this.showTable = true;
 }
 switchToCards(): void {
  this.showTable = false;
 }


}
