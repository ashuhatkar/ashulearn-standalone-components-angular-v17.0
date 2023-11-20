/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Component, CommonModule
    --* Description     : Represents a logo standalone view component
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      logo-view works!
    </p>
  `,
  styles: ``
})
export class LogoViewComponent implements OnInit {

  ngOnInit(): void {

  }
}
