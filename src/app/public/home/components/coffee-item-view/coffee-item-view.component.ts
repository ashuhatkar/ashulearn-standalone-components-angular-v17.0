/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Component, OnInit, CommonModule, CoffeeItemModel
  --*                 : CoffeeItemModel, RouterLink, RouterOutlet
  --* Description     : Represents a coffee item details standalone view component
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeItemModel } from '../../../../common/core/models/Coffee/coffee-item-model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-coffee-item-view',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="coffeeItemModel.photo" alt="Exterior photo of {{ coffeeItemModel.name }}">
      <h2 class="listing-heading">{{ coffeeItemModel.name }} {{ coffeeItemModel.price }}</h2>
      <p class="listing-location">{{ coffeeItemModel.city }}, {{ coffeeItemModel.state }} </p>
      <a [routerLink]="['/details', coffeeItemModel.id]">Learn more</a>
    </section>
  `,
  styleUrls: ['./coffee-item-view.component.css'],
})
export class CoffeeItemViewComponent {
  @Input() coffeeItemModel!: CoffeeItemModel;
}
