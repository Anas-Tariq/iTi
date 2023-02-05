import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiscountOffers, ICategory } from '../../Model/category';
import { IProduct } from '../../Model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  @Input() receivedCategoryID: number = 0;
  @Output() onTotalPriceChange: EventEmitter<number>;
  productList: IProduct[];
  categorizedProductList: IProduct[] = [];
  categoryList: ICategory[];
  clientName: string;
  isPurchased: boolean;
  purchaseDate: Date;
  selectedCategory: number;
  totalPrice: number;

  constructor() {
    this.discount = 0;
    this.storeName = 'Stabraq';
    this.storeLogo = '../../assets/stabraq.jpg';
    this.productList = [
      {
        id: 1,
        name: 'Lenvo thinpad X230',
        price: 100,
        quantity: 10,
        categoryID: 1,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 2,
        name: 'Dell',
        price: 200,
        quantity: 20,
        categoryID: 1,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 3,
        name: 'Lenovo Tab',
        price: 100,
        quantity: 10,
        categoryID: 2,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 4,
        name: 'Samsung Tab',
        price: 100,
        quantity: 10,
        categoryID: 2,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 5,
        name: 'Samsung note 10',
        price: 100,
        quantity: 10,
        categoryID: 3,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 6,
        name: 'Samsung S10',
        price: 100,
        quantity: 10,
        categoryID: 3,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 7,
        name: 'tochiba Utlra',
        price: 60000,
        quantity: 14,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
      },
      {
        id: 8,
        name: 'Apple Utlra',
        price: 7800060,
        quantity: 6,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
      },
      {
        id: 9,
        name: 'test Utlra',
        price: 7800060,
        quantity: 3,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
      },
      {
        id: 10,
        name: 'jhgfjxz',
        imgURL: '',
        quantity: 33,
        price: 44444444,
        categoryID: 1,
      },
      {
        name: 'fsdjhfgsdjhkgfsh',
        price: 7800060,
        quantity: 3,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
        id: 11,
      },
    ];
    this.categoryList = [
      {
        id: 1,
        name: 'Laptops',
        desciption: 'This is description',
      },
      {
        id: 2,
        name: 'Tablets',
        desciption: 'This is description',
      },
      {
        id: 3,
        name: 'Mobiles',
        desciption: 'This is description',
      },
    ];
    this.clientName = 'Anas';
    this.isPurchased = false;
    this.onTotalPriceChange = new EventEmitter<number>();
    this.purchaseDate = new Date();
    this.selectedCategory = 0;
    this.totalPrice = 0;
  }

  purchased() {
    this.isPurchased ? (this.isPurchased = false) : (this.isPurchased = true);
    console.log(this.isPurchased);
  }
  updateTotalPrice(id: number, price: number) {
    if (this.productList[id - 1].quantity > 0) {
      this.productList[id - 1].quantity--;
      console.log(this.productList[id - 1].quantity);
      this.totalPrice += 1 * price;
    } else {
      this.productList[id - 1].quantity = 0;
      console.log('Out Of Stock');
    }
  }
  filteredArr() {
    if (this.selectedCategory == 0) {
      this.categorizedProductList = this.productList;
    } else {
      this.categorizedProductList = this.productList.filter(
        (product) => product.categoryID == this.selectedCategory
      );
    }
    console.log(this.selectedCategory);
  }
}
