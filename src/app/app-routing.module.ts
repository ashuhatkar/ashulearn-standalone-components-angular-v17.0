/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : NgModule, RouterModule, inject, Component, OnInit, CommonModule
  --*                 : public_routes, admin_routes, PublicLayoutViewComponent, AdminLayoutViewComponent, CoffeeService
  --* Description     : Represents app routing ng module
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PUBLIC_ROUTES } from './common/layout-routes/public-routing.module';
import { ADMIN_ROUTES } from './common/layout-routes/admin-routing.module';
import { PublicLayoutViewComponent } from './common/shared/layouts/public-layout-view/public-layout-view.component';
import { AdminLayoutViewComponent } from './common/shared/layouts/admin-layout-view/admin-layout-view.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PublicLayoutViewComponent, children: PUBLIC_ROUTES
  },
  {
    path: '',
    component: AdminLayoutViewComponent, children: ADMIN_ROUTES
  },
  {
    path: '**',
    loadComponent: () => import('./common/shared/components/public/page-not-found-view/page-not-found-view.component').then(m => m.PageNotFoundViewComponent),
    title: '404 - Page not found'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
