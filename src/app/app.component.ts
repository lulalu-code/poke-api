import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poke-api';

  loading: boolean;

  constructor(private sharedService: SharedService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.sharedService
      .getLoading()
      .subscribe((loading) => (this.loading = loading));
  }

}
