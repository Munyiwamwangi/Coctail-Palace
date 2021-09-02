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

  private baseUrl = `${environment.baseURL}/random.php`;

  constructor(
    private http: HttpClient,
  ) { }
  
  getRandomCocktails(): Observable<any> {
    const expectedURLS = urlOrigin.fill(this.http.get<Cocktail[]>(this.baseUrl), 0, 5)
    
    return forkJoin(expectedURLS)
  }
}
