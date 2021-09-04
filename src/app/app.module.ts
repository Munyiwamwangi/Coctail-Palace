import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RandomDrinksComponent } from './components/random-drinks/random-drinks.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { CocktailServiceService } from './services/cocktail-service.service';
import { environment } from '../environments/environment';

// firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CustomDrinkComponent } from './components/custom-drink/custom-drink.component';
import { FormsModule } from '@angular/forms';
import { DisplayCustomComponent } from './components/display-custom/display-custom.component';


const appRoutes: Routes = [
  { path: 'coctails', component: RandomDrinksComponent },
  { path: 'display-local', component: DisplayCustomComponent},
  {path:"custom-drink", component: CustomDrinkComponent},
  { path: 'cocktail-details/:idDrink', component: CocktailDetailsComponent },
  { path: '', redirectTo: '/coctails', pathMatch:'full'},
  
]

@NgModule({
  declarations: [
    AppComponent,
    RandomDrinksComponent,
    CocktailDetailsComponent,
    CustomDrinkComponent,
    DisplayCustomComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // 3. Initialize
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
