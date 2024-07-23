import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories?: Category[];

  constructor(private categoryService: CategoryService){

  }

  ngOnInit(): void {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (data) => {
        this.categories= data;
      }
    })
  }

  onSearch(query:string){
    this.categoryService.getAllCategories(query).subscribe({
      next: (data) => {
        this.categories= data;
      }
    });
  }

}
