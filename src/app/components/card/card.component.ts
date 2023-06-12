import { Component, Input, OnInit, Output } from '@angular/core';
import { PokemonMeta } from 'src/app/models/pokemon.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'poke-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokeInput: PokemonMeta = {
    name:'',
    url: ''
  };

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    
  }

  getPokemonId(url: string): string {
    return this.sharedService.getPokemonId(url);
  }

  toCamelCase(name: string): string {
    return this.sharedService.toCamelCase(name);
  }
}
