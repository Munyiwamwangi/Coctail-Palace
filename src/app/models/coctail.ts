export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: null| string;
    strTags: string;
    strVideo: null| string;
    strCategory: string;
    strIBA: null| string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: null| string;
    strInstructionsDE: string;
    strInstructionsFR: null| string;
    strInstructionsIT: string;
    "strInstructionsZH-HANS": null| string;
    "strInstructionsZH-HANT": null| string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: null| string;
    strIngredient6: null| string;
    strIngredient7: null| string;
    strIngredient8: null| string;
    strIngredient9: null| string;
    strIngredient10: null| string;
    strIngredient11: null| string;
    strIngredient12: null| string;
    strIngredient13: null| string;
    strIngredient14: null| string;
    strIngredient15: null| string;
    strMeasure1: string ;
    strMeasure2: string ;
    strMeasure3: string ;
    strMeasure4: string ;
    strMeasure5: null| string;
    strMeasure6: null| string;
    strMeasure7: null| string;
    strMeasure8: null| string;
    strMeasure9: null| string;
    strMeasure10: null| string;
    strMeasure11: null| string;
    strMeasure12: null| string;
    strMeasure13: null| string;
    strMeasure14: null| string;
    strMeasure15: null| string;
    strImageSource: string;
    strImageAttribution: null| string;
    strCreativeCommonsConfirmed: string;
    dateModified: string | any;
}


export interface drinks{
    drinks: Cocktail[];
}
