/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Component, OnInit, CommonModule
  --* Description     : Represents a home/index standalone component
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
// import dependencies
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit{

  ngOnInit(): void {

  }
}
