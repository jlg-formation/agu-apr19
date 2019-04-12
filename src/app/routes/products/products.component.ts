import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/widget/rest.service';
import { FormControl } from '@angular/forms';

interface Cat {
  id: number;
  name: string;
  age: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [RestService]
})
export class ProductsComponent implements OnInit {

  name = new FormControl('titi');
  age = new FormControl('3 mois');

  cats: Cat[] = [
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
    { id: 1, name: 'Titi', age: '2 mois' },
  ];
  constructor(private rest: RestService) {
    this.rest.baseUrl = 'http://localhost:8080/ws';
  }

  ngOnInit() {
    this.retrieveAllCats();
  }

  deleteAll(): void {
    this.rest.deleteAll('cat').then(response => {
      this.refresh();
    });
  }

  refresh(): void {
    this.retrieveAllCats();
  }

  create(): void {
    this.rest.create('cat', { name: this.name.value, age: this.age.value })
      .then(r => this.refresh());
  }

  retrieveAllCats() {
    this.rest.retrieveAll('cat').then(response => {
      this.cats = response.content as Cat[];
    });
  }

}
