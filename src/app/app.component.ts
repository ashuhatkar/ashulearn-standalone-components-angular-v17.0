import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PublicLayoutViewComponent } from './common/shared/layouts/public-layout-view/public-layout-view.component';
import { AdminLayoutViewComponent } from './common/shared/layouts/admin-layout-view/admin-layout-view.component';
import { HomeComponent } from './public/home/components/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, PublicLayoutViewComponent, AdminLayoutViewComponent, HomeComponent],
  template: `
    <!-- <h1>Welcome to {{title}}!</h1> -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'make-my-day-angular';
}
