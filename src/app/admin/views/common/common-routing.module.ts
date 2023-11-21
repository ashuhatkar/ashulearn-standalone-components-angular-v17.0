/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Ng module, RouterModule, Routes
    --* Description     : Represents a common routing module
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//implement standalone components, dynamic imports and lazy loading
const ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
