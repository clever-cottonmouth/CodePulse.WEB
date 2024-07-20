import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../category/models/category.model';
import { ImageService } from 'src/app/shared/components/image-selector/image.service';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnInit, OnDestroy{
  isImageSelectorVisible:boolean=false;
  model: AddBlogPost;
  categories$?: Observable<Category[]>;
  imageSelectorSubscription?: Subscription;

  constructor(private blogPostService: BlogPostService,
     private router: Router,
     private categoryService: CategoryService,
     private imageService:ImageService
    ) {
    this.model = {
      title: '',
      shortDescription: '',
      content: '',
      featuredImageUrl: '',
      urlHandle: '',
      author: '',
      isVisible: true,
      publishedDate: this.formatDate(new Date()),
      categories:[]
    };
  }

  ngOnInit(): void {
   this.categories$= this.categoryService.getAllCategories()

   this.imageSelectorSubscription= this.imageService.onSelectImage()
   .subscribe({
    next: (selectedImage) => {
      this.model.featuredImageUrl = selectedImage.url;
      this.closeImageSelector()
    }
   })
  }
  formatDate(date: Date): Date {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return new Date(`${year}-${month}-${day}`);
  }

  onFormSubmit():void{
    console.log(this.model);
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
    })
  }

  openImageSelector():void{
    this.isImageSelectorVisible= true;
  }
  closeImageSelector():void{
    this.isImageSelectorVisible= false;
  }


  ngOnDestroy(): void {
    this.imageSelectorSubscription?.unsubscribe();
  }

}
