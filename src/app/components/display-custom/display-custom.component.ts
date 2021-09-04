import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  searching: boolean = false;
  searchField =""

  constructor(
    private api: CocktailServiceService
  ) { }

  ngOnInit(): void {
    this.api.getCustomCoctails().subscribe((results: Cocktail[]) => {
      this.cocktailsArrays = results;
    });

    
    

  }


  search($event:any) {
    let q = $event.target.value;

    const start = this.searchField.toLowerCase();
    const end = this.searchField.toLowerCase() + "\uf8ff"


    this.api.searchCustomCoctails(start, end)
      .subscribe((cocktails: Cocktail[]) => {
        console.log(cocktails)
        this.cocktailsArrays = cocktails;
      });
  }

}
