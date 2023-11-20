/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Routes, PageNotFoundViewComponent
    --* Description     : Represents a admin routes
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { Routes } from '@angular/router';
import { PageNotFoundViewComponent } from '../shared/components/admin/page-not-found-view/page-not-found-view.component';

export const admin_routes: Routes = [
  {
    path: '',
    redirectTo: '/admin', pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('../../admin/views/home/home.module').then(m => m.HomeModule),
    title: 'Admin home'
  },
  {
    path: 'admin',
    loadChildren: () => import('../../admin/views/common/common.module').then(m => m.CommonAppModule),
    title: 'Admin Common'
  },
  {
    path: '**',
    component: PageNotFoundViewComponent,
    title: 'Admin 404 Page not found.'
  }
];
