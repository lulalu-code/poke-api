import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private loading$!: ReplaySubject<boolean>;

  constructor() {
    this.loading$ = new ReplaySubject<boolean>(1);
  }

  getPokemonId(url: string): string {
    return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
  }

  toCamelCase(name: string): string {
    return name.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(loading: boolean) {
    this.loading$.next(loading);
  }

}
