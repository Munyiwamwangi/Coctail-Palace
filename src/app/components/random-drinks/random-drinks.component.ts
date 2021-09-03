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
  

  constructor(
    private api: CocktailServiceService
  ) { }

  ngOnInit(): void {
    this.api.getRandomCocktails().toPromise().then((results: drinks[]) => {

      results.forEach((element) => {
       const cocktail = {...element['drinks'][0]
       } as Cocktail
        
        console.log(cocktail)
        this.cocktailsArrays.push(cocktail )
      });

    })
    
  }
}
