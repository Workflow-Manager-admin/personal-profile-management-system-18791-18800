import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  template: `
    <span class="inline-block min-w-[44px] px-3 py-1 rounded-full font-semibold text-sm text-white text-center shadow"
      [ngClass]="{
        'bg-green-400': status?.toLowerCase() === 'active',
        'bg-pink-400': status?.toLowerCase() === 'inactive',
        'bg-blue-400': status?.toLowerCase() === 'pending'
      }"
      [attr.aria-label]="status">
      {{status}}
    </span>
  `,
  styles: [`
    span { border-radius: 16px; font-family: 'Inter','Segoe UI',sans-serif; }
  `]
})
// PUBLIC_INTERFACE
export class StatusBadgeComponent {
  @Input() status: string = "";
}
