/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Component, CommonModule
    --* Description     : Represents a date pipe standalone view component
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-pipe-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      date-pipe-view works!
    </p>
  `,
  styles: ``
})
export class DatePipeViewComponent implements OnInit {

  ngOnInit(): void {

  }
}
