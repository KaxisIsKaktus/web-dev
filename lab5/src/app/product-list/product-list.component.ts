import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedCategory: string = '';
  products = products.map(product => ({ ...product, like: Math.floor(Math.random() * 101), liked: false}));

  constructor() {}
  filterByCategory(category: string) {
    this.selectedCategory = category
  }
  showAll() {
    this.selectedCategory = ''
  }

  share(url: String) {
    window.open(`https://t.me/share/url?url=${url}`);
  }
  getRatingStars(rating: number) {
    return Array(rating).fill(0);
  }
  removeProduct(product: any){
    const index = this.products.indexOf(product);
    if(index !== -1) {
      this.products.splice(index, 1);
      alert(product.name + " is removed!");
    }
  }
  changeLike(product:any) {
    product.liked ? product.like-- : product.like++;
    product.liked = !product.liked;
  }
  
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/