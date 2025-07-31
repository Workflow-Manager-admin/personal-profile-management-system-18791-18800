import { Component, Input } from '@angular/core';

type Profile = {
  name: string;
  devices: number;
  type: string;
  status: string;
  created: string;
};

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
// PUBLIC_INTERFACE
export class ProfileTableComponent {
  @Input() profiles: Profile[] = [];
}
