import { Component,OnInit } from '@angular/core';
import { Category } from '../../../public/models/category';
import { CategoryRepository } from '../../../public/models/categoryRepository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories:Category[];
  categoryRepository = new CategoryRepository;
  selectedCategory: Category | null | undefined = null;
  constructor(){

this.categoryRepository = new CategoryRepository();
this.categories = this.categoryRepository.getCategories();
  }
ngOnInit(): void {
  
}

displayAll=true;

SelectCategory(item? :Category)
{
  if(item)
  {
    this.selectedCategory=item;
    this.displayAll=false;
  }
  this.selectedCategory=null;

}
}
