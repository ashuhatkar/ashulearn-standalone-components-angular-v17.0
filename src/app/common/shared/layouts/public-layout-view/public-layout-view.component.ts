/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Component, OnInit, CommonModule, RouterLink, RouterLinkActive, RouterOutlet
  --* Description     : Represents a public layout standalone view component
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout-view',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,  RouterOutlet],
  template: `
    <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <img class="brand-logo" src="/assets/images/logo.jpg" alt="logo" aria-hidden="true">
        </a>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active"><a class="nav-link" [routerLink]="['/home']">Products</a></li>
              <li class="nav-item"><a class="nav-link" [routerLink]="['/about-us']">About</a></li>
              <li class="nav-item"><a class="nav-link" [routerLink]="['/contact-us']">Contact</a></li>
            </ul>
            <span class="navbar-text">
              <!-- <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" aria-label="Search" placeholder="Filter by city (Chicago)" type="button" (click)="filterResults(filter.value)">
                <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
              </form> -->
              <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a class="nav-link" [routerLink]="['/admin']">Admin</a></li>
              </ul>
            </span>
          </div>
        </nav>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./public-layout-view.component.css'],
})
export class PublicLayoutViewComponent {

}
