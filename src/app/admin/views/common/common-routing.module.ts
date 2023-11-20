import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//implement standalone components, dynamic imports and lazy loading
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
