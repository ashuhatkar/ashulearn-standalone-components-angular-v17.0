import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeItemViewComponent } from './coffee-item-view/coffee-item-view.component';
import { CoffeeItemModel } from '../../../common/core/models/Coffee/coffee-item-model';
import { CoffeeService } from '../../../common/core/services/Coffee/coffee.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CoffeeItemViewComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city eg. Chicago" #filter>
        <button class="btn btn-primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
        <app-coffee-item-view *ngFor="let coffeeItemModel of filteredCoffeeItemList" [coffeeItemModel]="coffeeItemModel"></app-coffee-item-view>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //#region Fields

  coffeeItemList: CoffeeItemModel[] = [];
  coffeeService: CoffeeService = inject(CoffeeService);
  filteredCoffeeItemList: CoffeeItemModel[] = [];

  //#endregion

  //#region Ctor

  constructor() {
    this.coffeeItemList = this.coffeeService.getAllCoffeeItems();
    this.filteredCoffeeItemList = this.coffeeItemList;
  }

  //#endregion

  //#region Methods

  filterResults(text: string) {
    if (!text) {
      this.filteredCoffeeItemList = this.coffeeItemList;
      return;
    }

    this.filteredCoffeeItemList = this.coffeeItemList.filter(
      coffeeItemModel => coffeeItemModel?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  //#endregion

}
