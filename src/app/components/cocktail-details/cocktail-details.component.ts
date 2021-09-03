import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/coctail';
import { CocktailServiceService } from 'src/app/services/cocktail-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  coctailDetails!: Cocktail;

  constructor(
    private api: CocktailServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const _id :string | null= this.route.snapshot.paramMap.get("idDrink")
    this.coctailDetails = this.api.getCoctailById(_id)
  }

}
