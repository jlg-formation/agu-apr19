import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/widget/rest.service';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

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

  isBusy = false;
  name = new FormControl('titi');
  age = new FormControl('3 mois');

  cats: Cat[] = [];
  constructor(private rest: RestService) {
    console.log('qsdf')
    this.rest.baseUrl = environment.url;
  }

  ngOnInit() {
    this.refresh();
  }

  deleteAll(): Promise<void> {
    this.isBusy = true;
    return this.rest.deleteAll('cat').then(response => {
      return this.refresh();
    });
  }

  create(): void {
    this.isBusy = true;
    this.rest.create('cat', { name: this.name.value, age: this.age.value })
      .then(r => this.refresh());
  }

  refresh(): Promise<void> {
    this.isBusy = true;
    return this.rest.retrieveAll('cat').then(response => {
      this.cats = response.content as Cat[];
    }).finally(() => this.isBusy = false);
  }

}
