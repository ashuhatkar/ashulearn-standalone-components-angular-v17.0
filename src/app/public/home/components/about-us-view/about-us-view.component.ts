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
