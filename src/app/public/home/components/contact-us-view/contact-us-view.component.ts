/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : FormControl, FormGroup, inject, Component, OnInit, CommonModule
  --*                 : ActivatedRoute, CoffeeService
  --* Description     : Represents contact us standalone view component
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../../../common/core/services/Coffee/coffee.service';

@Component({
  selector: 'app-contact-us-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="details">
      <h3 class="details-heading">Contact us</h3>
      <h5 class="details-heading">Have a General Enquiry?</h5>
      <section class="details-apply">
      <h2 class="section-heading">Apply now to enjoy coffees</h2>
      <form class="section-heading" [formGroup]="applyForm" (submit)="submitContactForm()">
        <label for="contact-subject">Contact subject</label>
        <input id="contact-subject" type="text" formControlName="contactSubject">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">
        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">
        <label for="country">Country</label>
        <input id="country" type="text" formControlName="country">
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <label for="comments">Comments</label>
        <input id="comments" type="text" formControlName="comments">
        <button type="submit" class="primary">Apply now</button>
      </form>
      </section>
    </section>
    `,
styleUrls: ['./contact-us-view.component.css'],
})
export class ContactUsViewComponent {

  //#region Fields

  coffeeService = inject(CoffeeService);

  applyForm = new FormGroup({
    contactSubject: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl(''),
    comments: new FormControl('')
  });

  //#endregion

  //#region Ctor

  constructor() {}

  submitContactForm() {
    this.coffeeService.submitContactForm(
      this.applyForm.value.contactSubject ?? '',
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.country ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.comments ?? ''
    );
  }

  //#endregion

}
