/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Routes, HomeComponent
  --* Description     : Represents a public routes
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { Routes } from '@angular/router';
import { HomeComponent } from '../../public/home/components/home.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'home',
    loadComponent: () => import('../../public/home/components/home.component').then(m => m.HomeComponent),
    title: 'Home page'
  },
  {
    path: 'about-us',
    loadComponent: () => import('../../public/home/components/about-us-view/about-us-view.component').then(m => m.AboutUsViewComponent),
    title: 'About us'
  },
  {
    path: 'contact-us',
    loadComponent: () => import('../../public/home/components/contact-us-view/contact-us-view.component').then(m => m.ContactUsViewComponent),
    title: 'Contact us'
  },
  {
    path: 'details/:id',
    loadComponent: () => import('../../public/home/components/coffee-item-details-view/coffee-item-details-view.component').then(m => m.CoffeeItemDetailsViewComponent),
    title: 'Coffee details'
  },
];
