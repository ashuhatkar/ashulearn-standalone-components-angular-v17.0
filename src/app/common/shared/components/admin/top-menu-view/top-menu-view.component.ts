/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Component, CommonModule
    --* Description     : Represents a top menu standalone view component
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-menu-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      top-menu-view works!
    </p>
  `,
  styles: ``
})
export class TopMenuViewComponent implements OnInit {

  ngOnInit(): void {

  }
}
