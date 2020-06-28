import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shoppinglistservice: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe('Schezwan Fried Rice',
        'Its so good!',
        'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2014/06/schezwan-fried-rice-recipe-500x375.jpg', 
        [
            new Ingredient('Rice', 1),
            new Ingredient('French Fries', 20)
        ]
        ),

        new Recipe('Veg Burger Recipe ',
        'What else you need to say!',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1-500x375.jpg',
        [
            new Ingredient('Bread', 2),
            new Ingredient('French Fries', 20)
        ])
      ];    

    recipeSelected = new EventEmitter<Recipe>();
    
    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]) {
        this.shoppinglistservice.addIngredientArray(ingredient);
    }
}