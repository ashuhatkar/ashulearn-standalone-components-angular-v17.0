/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Ng module
  --* Description     : Represents a common module
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonRoutingModule } from './common-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonRoutingModule
  ]
})
export class CommonAppModule { }
