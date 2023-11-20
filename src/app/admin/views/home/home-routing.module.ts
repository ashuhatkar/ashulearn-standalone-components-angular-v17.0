/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Ng module, RouterModule, Routes, Components
    --* Description     : Represents a home routing module
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
      children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
