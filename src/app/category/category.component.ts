import { Component,OnInit } from '@angular/core';
import { Category } from '../../../public/models/category';
import { CategoryRepository } from '../../../public/models/categoryRepository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  categories:Category[];
   selectedCategory: Category | null | undefined = null;

  constructor(private categoryService: CategoryService) {
    this.categories=[];
   }

ngOnInit(): void {
  this.categoryService.getCategories().subscribe(data=> {
    this.categories=data;
  });
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
