import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { public_routes } from './common/layout-routes/public-routing.module';
import { admin_routes } from './common/layout-routes/admin-routing.module';
import { PublicLayoutViewComponent } from './common/shared/layouts/public-layout-view/public-layout-view.component';
import { AdminLayoutViewComponent } from './common/shared/layouts/admin-layout-view/admin-layout-view.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutViewComponent, children: public_routes
  },
  {
    path: '',
    component: AdminLayoutViewComponent, children: admin_routes
  },
  {
    path: '**',
    loadComponent: () => import('./common/shared/components/public/page-not-found-view/page-not-found-view.component').then(m => m.PageNotFoundViewComponent),
    title: '404 - Page not found'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
