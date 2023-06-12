import { Component, Input } from '@angular/core';
import { PokemonMeta } from 'src/app/models/pokemon.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'poke-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() pokeInput: PokemonMeta[] = [{
    name:'',
    url: ''
  }];

  displayedColumns: string[] = ['identifier', 'name', 'url']

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    console.log("Pokemon: " + JSON.stringify(this.pokeInput));
  }

  getPokemonId(url: string): string {
    return this.sharedService.getPokemonId(url);
  }

  toCamelCase(name: string): string {
    return this.sharedService.toCamelCase(name);
  }

}
