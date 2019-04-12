import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  cats = [
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
    { id: 1, name: 'Titi', age: '2 mois'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
