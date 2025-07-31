import { Component } from '@angular/core';

// PUBLIC_INTERFACE
/**
 * ProfileDashboardComponent
 * The Profile Management Dashboard, showing info cards, filter tabs, search, create, and a profiles data table (all with mock data).
 */
@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent {
  infoCards = [
    { title: 'Total Profiles', value: 6, badge: '+2 from yesterday', gradient: 'gradient-1' },
    { title: 'Created Today', value: 5, badge: 'Last created 2h ago', gradient: 'gradient-2' },
    { title: 'Active Devices', value: 3, badge: '71.5% active rate', gradient: 'gradient-3' }
  ];

  tabs = [
    { label: 'All', value: 'ALL' },
    { label: 'Impromptu', value: 'IMPROMPTU' },
    { label: 'Schedule', value: 'SCHEDULE' }
  ];
  activeTab = 'ALL';

  searchText = '';

  profiles = [
    {
      name: 'Quarterly Review Team',
      devices: 4,
      type: 'SCHEDULE',
      status: 'ACTIVE',
      created: '2024-07-23',
    },
    {
      name: 'Holiday Impromptu',
      devices: 1,
      type: 'IMPROMPTU',
      status: 'INACTIVE',
      created: '2024-07-29',
    },
    {
      name: 'Product Standup',
      devices: 3,
      type: 'SCHEDULE',
      status: 'ACTIVE',
      created: '2024-07-28',
    },
    {
      name: 'Adhoc Brainstorm',
      devices: 2,
      type: 'IMPROMPTU',
      status: 'ACTIVE',
      created: '2024-07-31',
    },
    {
      name: 'Legacy Devices',
      devices: 0,
      type: 'SCHEDULE',
      status: 'INACTIVE',
      created: '2024-06-28',
    }
  ];

  // PUBLIC_INTERFACE
  /** Handle a tab click and set as active */
  onTab(tabValue: string) {
    this.activeTab = tabValue;
  }

  // PUBLIC_INTERFACE
  /** Returns profiles filtered by active tab and search input */
  get filteredProfiles() {
    let filtered = this.profiles;
    if (this.activeTab !== 'ALL') {
      filtered = filtered.filter(p => p.type === this.activeTab);
    }
    if (this.searchText.trim()) {
      const needle = this.searchText.trim().toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(needle)
      );
    }
    return filtered;
  }
}
