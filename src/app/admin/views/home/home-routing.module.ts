/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Ng module, RouterModule, Routes, Components
  --* Description     : Represents a home routing module
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

const ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent,
      children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
