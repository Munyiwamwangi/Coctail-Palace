import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CocktailServiceService } from 'src/app/services/cocktail-service.service';
import { CocktailDetailsComponent } from '../cocktail-details/cocktail-details.component';
import firebase from 'firebase'

@Component({
  selector: 'app-custom-drink',
  templateUrl: './custom-drink.component.html',
  styleUrls: ['./custom-drink.component.css']
})
export class CustomDrinkComponent implements OnInit {
    coctail = {
      strDrink: "",
      strCategory: "",
      strAlcoholic: "",
      strInstructions: "",
      strIngredient1:"",
      strIngredient2:"",
      strMeasure1:"",
      strMeasure2:"",
      strImageSource: "",
      dateModified: firebase.firestore.FieldValue.serverTimestamp(),
  
  }

  constructor(
    private coctailService: CocktailServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void { }


  submitCoctail(coctailForm: NgForm) {
    
    console.log(coctailForm)

    if (!coctailForm.valid)
    { return; }

    this.coctailService.createCustomCoctail(this.coctail)
    coctailForm.reset()
    this.router.navigate(["display-local"])
  }


}
