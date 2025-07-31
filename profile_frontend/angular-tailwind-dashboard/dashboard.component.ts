import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// PUBLIC_INTERFACE
export class DashboardComponent {
  stats = [
    { number: 6, subcaption: "New Profiles", color: "from-pink-400 to-blue-600", description: "75% active now", badge: "active" },
    { number: 5, subcaption: "Created Today", color: "from-blue-600 to-teal-400", description: "3 incomplete", badge: "info" },
    { number: 3, subcaption: "Active Devices", color: "from-green-400 to-blue-400", description: "Device usage stable", badge: "success" }
  ];
  tabs = ["All", "Incomplete", "Schedule"];
  selectedTab = 0;
  search = '';
  profiles = [
    { name: 'Anna Willis', devices: 3, type: 'Admin', status: 'Active', created: '2024-07-01' },
    { name: 'Bernard Lee', devices: 1, type: 'Standard', status: 'Inactive', created: '2024-06-21' },
    { name: 'Cathy Sun', devices: 5, type: 'Manager', status: 'Active', created: '2024-05-30' }
  ];

  onTabChange(idx: number) { this.selectedTab = idx; }
  onSearch(query: string) { this.search = query; }
  onCreate() { alert('+ Create Profile clicked!'); }
}
