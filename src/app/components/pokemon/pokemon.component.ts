import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ){}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id') || ''
    console.log( 'Identifier -->', identifier);

    this.pokemonsService.getPokemonById(identifier).subscribe((pokemon) => {

      if(!pokemon){
        this.router.navigateByUrl('/');
      }

      this.pokemon = pokemon;
      console.log('Pokemon --> ' , this.pokemon);
    });
  }

  toCamelCase(name: string): string {
    return this.sharedService.toCamelCase(name);
  }

}
