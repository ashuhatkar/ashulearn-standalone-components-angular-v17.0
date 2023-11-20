/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Component, CommonModule
    --* Description     : Represents a footer standalone view component
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      footer-view works!
    </p>
  `,
  styles: ``
})
export class FooterViewComponent implements OnInit {

  ngOnInit(): void {

  }
}
