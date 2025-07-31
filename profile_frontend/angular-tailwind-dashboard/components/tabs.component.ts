import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
// PUBLIC_INTERFACE
export class TabsComponent {
  @Input() tabs: string[] = [];
  @Input() activeTab: number = 0;
  @Output() tabChange = new EventEmitter<number>();
}
