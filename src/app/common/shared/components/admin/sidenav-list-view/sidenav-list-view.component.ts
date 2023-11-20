/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Component, CommonModule
    --* Description     : Represents a side nav standalone view component
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav-list-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      sidenav-list-view works!
    </p>
  `,
  styles: ``
})
export class SidenavListViewComponent implements OnInit{

  ngOnInit(): void {
    
  }
}
