import { Component, Input } from '@angular/core';

// PUBLIC_INTERFACE
/**
 * ProfileTableComponent displays the dashboard table with row pills/actions.
 */
@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss']
})
export class ProfileTableComponent {
  @Input() profiles: {
    name: string,
    devices: number,
    type: 'IMPROMPTU'|'SCHEDULE',
    status: 'ACTIVE'|'INACTIVE',
    created: string
  }[] = [];
}
