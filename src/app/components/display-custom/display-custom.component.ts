import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail, drinks } from 'src/app/models/coctail';
import { CocktailServiceService } from 'src/app/services/cocktail-service.service';



@Component({
  selector: 'app-display-custom',
  templateUrl: './display-custom.component.html',
  styleUrls: ['./display-custom.component.css']
})
export class DisplayCustomComponent implements OnInit {

  cocktailsArrays!: Cocktail[];
  randomCocktail: Partial<Cocktail> = {};


  constructor(
    private api: CocktailServiceService
  ) { }

  ngOnInit(): void {
    this.api.getCustomCoctails().subscribe((results: Cocktail[]) => {

      console.log(results,"============================")
      this.cocktailsArrays = results;
    });

  }

}
