import { Component, Input } from '@angular/core';

// PUBLIC_INTERFACE
/**
 * InfoCardComponent displays one info card with a title, value, and badge.
 */
@Component({
  selector: 'app-info-card',
  template: `
    <div class="info-card" [ngClass]="gradientClass">
      <div class="info-card-content">
        <div class="info-title">{{ title }}</div>
        <div class="info-main">{{ value }}</div>
        <div class="info-badge" *ngIf="badge">{{ badge }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() title = '';
  @Input() value: string | number = '';
  @Input() badge = '';
  @Input() gradientClass = '';
}
