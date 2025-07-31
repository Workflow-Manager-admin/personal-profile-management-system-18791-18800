import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
// PUBLIC_INTERFACE
export class InfoCardComponent {
  @Input() number: number = 0;
  @Input() subcaption: string = '';
  @Input() colorGradient: string = ''; // Tailwind gradient classes: e.g. from-pink-400 to-blue-600
  @Input() description: string = '';
  @Input() badge: string = ''; // optional for badge type
}
