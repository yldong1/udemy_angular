import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('wjw', 'slut', 'https://pbs.twimg.com/media/Dw-2x1BUwAAJaod.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
