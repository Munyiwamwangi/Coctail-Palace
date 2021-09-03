import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Cocktail } from '../models/coctail';
import { forkJoin, Observable } from 'rxjs';

const urlOrigin = new Array(5).fill(0);

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  private _coctails: Cocktail [] = [];
  private baseUrl = `${environment.baseURL}/random.php`;

  constructor(private http: HttpClient,) { }
  
  getRandomCocktails(): Observable<any[]> {
    const expectedURLS = urlOrigin.fill(this.http.get<Cocktail[]>(this.baseUrl), 0, 5)
    
    return forkJoin(expectedURLS)
  }

  getRandomCocktail():Observable<any> {
    return this.http.get<Cocktail>(this.baseUrl)
  }

  public set setCoctails(value: Cocktail[]) {
     this._coctails = value;
  }

  get coctails() {
    return [...this._coctails];
  }

  getCoctailById(id: string | any) :Cocktail {
    return {
      ...this._coctails.find((coctail) =>coctail.idDrink == id
      )
    } as Cocktail
  }
}
