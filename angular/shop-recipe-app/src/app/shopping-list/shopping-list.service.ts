import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [new Ingredient('Apples', 5),
    new Ingredient('Strawberry', 15)
  ];

  getIngredient() {
      return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient ) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientArray(ingredients: Ingredient[]) {
    for(let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  }

}