import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-header',
  templateUrl: './gradient-header.component.html',
  styleUrls: ['./gradient-header.component.css']
})
// PUBLIC_INTERFACE
export class GradientHeaderComponent {
  @Input() title: string = "ICX";
}
