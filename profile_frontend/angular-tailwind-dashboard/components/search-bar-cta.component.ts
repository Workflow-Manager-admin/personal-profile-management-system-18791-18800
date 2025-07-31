import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar-cta',
  templateUrl: './search-bar-cta.component.html',
  styleUrls: ['./search-bar-cta.component.css']
})
// PUBLIC_INTERFACE
export class SearchBarCtaComponent {
  @Input() search = '';
  @Output() searchChange = new EventEmitter<string>();
  @Output() create = new EventEmitter<void>();

  onInput(e: Event) {
    this.searchChange.emit((e.target as HTMLInputElement).value);
  }
}
