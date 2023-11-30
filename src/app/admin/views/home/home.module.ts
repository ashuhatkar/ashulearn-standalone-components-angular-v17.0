/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Ng module, CommonModule, HomeRoutingModule
  --* Description     : Represents a home module
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
