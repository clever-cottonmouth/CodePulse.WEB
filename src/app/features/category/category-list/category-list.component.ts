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
  totalCount?: number;
  list:number[] = [];
  pageNumber=1;
  pageSize=3;


  constructor(private categoryService: CategoryService){

  }

  ngOnInit(): void {

    this.categoryService.getCategoryCount()
    .subscribe({
      next: (data) => {
        this.totalCount = data;
        this.list = new Array(Math.ceil(data / this.pageSize))
      }
    })


    this.categoryService.getAllCategories(
      undefined,
      undefined,
      undefined,
      this.pageNumber,
      this.pageSize
    )
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

  sort(sortBy:string, sortDirection: string){
    this.categoryService.getAllCategories(undefined, sortBy, sortDirection).subscribe({
      next: (data) => {
        this.categories= data;
      }

    })
  }

  getPage(pageNumber: number){
    this.pageNumber = pageNumber;
    this.categoryService.getAllCategories(
      undefined,
      undefined,
      undefined,
      this.pageNumber,
      this.pageSize
    )
    .subscribe({
      next: (data) => {
        this.categories= data;
      }
    })
  }

  getNextPage(){

    if(this.pageNumber + 1 > this.list.length){
      return;
    }

    this.pageNumber += 1;
    this.categoryService.getAllCategories(
      undefined,
      undefined,
      undefined,
      this.pageNumber,
      this.pageSize
    )
    .subscribe({
      next: (data) => {
        this.categories= data;
      }
    })
  }

  getPrevPage(){
    if(this.pageNumber - 1 < 1){
      return;
    }

    this.pageNumber -= 1;
    this.categoryService.getAllCategories(
      undefined,
      undefined,
      undefined,
      this.pageNumber,
      this.pageSize
    )
    .subscribe({
      next: (data) => {
        this.categories= data;
      }
    })
  }


}
