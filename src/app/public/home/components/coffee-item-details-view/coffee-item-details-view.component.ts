import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CoffeeService } from '../../../../common/core/services/Coffee/coffee.service';
import { CoffeeItemModel } from '../../../../common/core/models/Coffee/coffee-item-model';

@Component({
  selector: 'app-coffee-item-details-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
    <img class="listing-photo" [src]="coffeeItemModel?.photo" alt="Exterior photo of {{coffeeItemModel?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{coffeeItemModel?.name}}</h2>
      <p class="listing-location">{{coffeeItemModel?.city}}, {{coffeeItemModel?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this coffee location</h2>
      <ul>
        <li><b>Receipe:</b> {{coffeeItemModel?.description}}</li>
        <li><b>Units available:</b> {{coffeeItemModel?.availableUnits}}</li>
        <li><b>Does this location have wifi:</b> {{coffeeItemModel?.wifi ? 'yes' : 'no'}}</li>
        <li><b>Does this location have maker:</b> {{coffeeItemModel?.maker}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to enjoy coffees</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">
        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
  </section>
  </article>
`,
  styleUrls: ['./coffee-item-details-view.component.css'],
})
export class CoffeeItemDetailsViewComponent {

  //#region Fields

  coffeeItemId: number = -1;
  route: ActivatedRoute = inject(ActivatedRoute);
  coffeeService = inject(CoffeeService);
  coffeeItemModel: CoffeeItemModel | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  //#endregion

  //#region Ctor

  constructor() {
    const coffeeItemId = Number(this.route.snapshot.params['id']);
    this.coffeeItemModel = this.coffeeService.getCoffeeItemById(coffeeItemId);
  }

  submitApplication() {
    this.coffeeService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  //#endregion

}
