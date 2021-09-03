import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RandomDrinksComponent } from './components/random-drinks/random-drinks.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { CocktailServiceService } from './services/cocktail-service.service';


const appRoutes: Routes = [
  { path: 'coctails', component: RandomDrinksComponent },
  { path: 'cocktail-details/:idDrink', component: CocktailDetailsComponent },
  { path: '', redirectTo: '/coctails', pathMatch:'full'},
  
]

@NgModule({
  declarations: [
    AppComponent,
    RandomDrinksComponent,
    CocktailDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
