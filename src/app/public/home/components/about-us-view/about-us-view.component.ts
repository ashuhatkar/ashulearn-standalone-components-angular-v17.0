/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Component, OnInit, CommonModule
    --* Description     : Represents a about us standalone view component
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p><br/><br/>
      About us works!
    </p>
  `,
  styles: ``
})
export class AboutUsViewComponent implements OnInit {

  ngOnInit(): void {

  }
}
