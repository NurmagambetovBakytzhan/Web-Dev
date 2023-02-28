import { Component } from '@angular/core';

import { products } from '../products';

import { Product } from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  productsArray: Product[] = []; // default value to satisfy TypeScript

  constructor() {
    this.products = products; // assign value in constructor
  }


  share(product: Product) {
    const shareUrl = encodeURIComponent(product.url);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${shareUrl}`;
    const telegramUrl = `https://t.me/share/url?url=${shareUrl}`;
    window.open(whatsappUrl, '_blank');
    window.open(telegramUrl, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }




}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/