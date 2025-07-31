import { Component, Input, Output, EventEmitter } from '@angular/core';

// PUBLIC_INTERFACE
/**
 * FilterTabsComponent displays the dashboard tab row and emits tab changes.
 */
@Component({
  selector: 'app-filter-tabs',
  template: `
    <nav class="tab-row">
      <button
        *ngFor="let tab of tabs"
        class="tab"
        [class.active]="activeTab === tab.value"
        (click)="tabClick(tab.value)"
        type="button"
      >
        {{ tab.label }}
      </button>
    </nav>
  `,
  styleUrls: ['./filter-tabs.component.scss']
})
export class FilterTabsComponent {
  @Input() tabs: { label: string, value: string }[] = [];
  @Input() activeTab = '';
  @Output() activeTabChange = new EventEmitter<string>();

  tabClick(val: string) {
    this.activeTabChange.emit(val);
  }
}
