import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { from} from 'rxjs';
import { Cocktail, drinks} from 'src/app/models/coctail';
import { CocktailServiceService } from 'src/app/services/cocktail-service.service';


@Component({
  selector: 'app-random-drinks',
  templateUrl: './random-drinks.component.html',
  styleUrls: ['./random-drinks.component.css']
})
export class RandomDrinksComponent implements OnInit {
  title = "Five Favs"
  cocktailsArrays: Cocktail[] = [];
  randomCocktail:Partial<Cocktail> = {};


  constructor(
    private api: CocktailServiceService
  ) { }

  ngOnInit(): void {
    this.getDrinks()
    
  }

  getDrinks() {
    this.api.getRandomCocktails().toPromise().then((results: drinks[]) => {

      results.forEach((element) => {
        const cocktail = {
          ...element['drinks'][0]
        } as Cocktail

        this.cocktailsArrays.push(cocktail)
      });
      this.api.setCoctails = this.cocktailsArrays;
    })
  }

  getRandomCocktail() {
    this.api.getRandomCocktail().toPromise().then((result:drinks) => {
      
      console.log(JSON.stringify(result,null,2))
      this.randomCocktail = { ...result['drinks'][0] } ;
    })
  }
}
