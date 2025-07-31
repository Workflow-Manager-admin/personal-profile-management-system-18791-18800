import React, { useState } from 'react';
import './ProfileManagement.css';

// Mock icon SVGs (inline for simplicity; in a real app, use an icon library or import SVGs)
const AppLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" style={{marginRight: 12}}>
    <circle cx="16" cy="16" r="16" fill="#EA4EC6"/>
    <text x="50%" y="56%" textAnchor="middle" fontSize="16" fontFamily="Arial" fontWeight="700" fill="white" dy=".2em">I</text>
  </svg>
);

const UserCircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="14" fill="#E1E8F0" stroke="#33D2E2" strokeWidth="2"/>
    <circle cx="16" cy="14" r="6" fill="#EA4EC6" />
    <ellipse cx="16" cy="22" rx="8" ry="6" fill="#F7F9FC" />
  </svg>
);

const SearchIcon = () => (
  <svg height="20" width="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="7" stroke="#607D8B" strokeWidth="2"/>
    <line x1="14" y1="14" x2="19" y2="19" stroke="#607D8B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 12.5V16H5.5L14.18 7.32C14.572 6.928 14.572 6.292 14.18 5.9L12.1 3.82C11.708 3.428 11.072 3.428 10.68 3.82L2 12.5Z" stroke="#307DFC" strokeWidth="1.5" />
  </svg>
);

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="5" y="5" width="10" height="10" rx="2" stroke="#EA4EC6" strokeWidth="1.5"/>
    <rect x="2" y="2" width="8" height="8" rx="2" stroke="#607D8B" strokeWidth="1.2"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="4" y="6" width="10" height="8" rx="2" stroke="#FA5677" strokeWidth="1.5"/>
    <rect x="7" y="3.5" width="4" height="2" rx="1" stroke="#FA5677" strokeWidth="1"/>
    <line x1="6.5" y1="8" x2="6.5" y2="12" stroke="#FA5677" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="9" y1="8" x2="9" y2="12" stroke="#FA5677" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="11.5" y1="8" x2="11.5" y2="12" stroke="#FA5677" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// -- Header Component --
const ProfileHeader = () => (
  <header className="pm-header">
    <div className="pm-header__logo-title">
      <AppLogo/>
      <span className="pm-header__title">ICK</span>
    </div>
    <button className="pm-header__user-btn" aria-label="User menu">
      <UserCircleIcon />
    </button>
  </header>
);

// -- Statistic Info Card --
const StatsCard = ({ number, subcaption, color, description }) => (
  <div className="pm-stats-card">
    <div className="pm-stats-card__toprow">
      <span className="pm-stats-card__number" style={{color}}>{number}</span>
      <span className="pm-stats-card__subcaption" style={{color}}>{subcaption}</span>
    </div>
    <div className="pm-stats-card__desc">{description}</div>
  </div>
);

// -- Tabs Component --
const Tabs = ({ tabs, activeTab, onTabChange }) => (
  <div className="pm-tabs">
    {tabs.map((tab, idx) => (
      <button
        key={tab}
        className={`pm-tab${activeTab === idx ? ' active' : ''}`}
        onClick={() => onTabChange(idx)}
        type="button"
      >{tab}</button>
    ))}
  </div>
);

// -- Search + Action Bar --
const SearchActionBar = ({ searchQuery, onSearch, onCreate }) => (
  <div className="pm-search-actions">
    <div className="pm-search-box">
      <span className="pm-search-icon"><SearchIcon /></span>
      <input
        className="pm-search-input"
        type="search"
        value={searchQuery}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search profiles…"
      />
    </div>
    <button className="pm-create-btn" onClick={onCreate}>+ Create Profile</button>
  </div>
);

// -- Status Badge --
const StatusBadge = ({ status }) => (
  <span className={`pm-status-badge ${status.toLowerCase()}`}>
    {status}
  </span>
);

// -- Table Row Actions --
const RowActions = () => (
  <div className="pm-table-actions">
    <button title="Edit" className="pm-action-btn edit"><EditIcon /></button>
    <button title="Copy" className="pm-action-btn copy"><CopyIcon /></button>
    <button title="Delete" className="pm-action-btn delete"><DeleteIcon /></button>
  </div>
);

// -- Profile Table --
const mockProfiles = [
  {
    name: 'Anna Willis',
    devices: 3,
    type: 'Admin',
    status: 'Active',
    created: '2024-07-01',
  },
  {
    name: 'Bernard Lee',
    devices: 1,
    type: 'Standard',
    status: 'Inactive',
    created: '2024-06-21',
  },
  {
    name: 'Cathy Sun',
    devices: 5,
    type: 'Manager',
    status: 'Active',
    created: '2024-05-30',
  },
];

const ProfileTable = ({ profiles }) => (
  <div className="pm-table-wrapper">
    <table className="pm-profile-table">
      <thead>
        <tr>
          <th>Profile Name</th>
          <th>Devices</th>
          <th>Type</th>
          <th>Status</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((p, idx) => (
          <tr key={p.name} className={idx % 2 === 1 ? "alt" : ""}>
            <td>{p.name}</td>
            <td>{p.devices}</td>
            <td>{p.type}</td>
            <td><StatusBadge status={p.status}/></td>
            <td>{p.created}</td>
            <td><RowActions/></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// -- Main Profile Management Page --
export default function ProfileManagement() {
  // Mock stats
  const stats = [
    { number: 6, subcaption: "New Profiles", color: "#EA4EC6", description: "75% active now" },
    { number: 5, subcaption: "Created Today", color: "#307DFC", description: "3 incomplete" },
    { number: 3, subcaption: "Active Devices", color: "#52E396", description: "Device usage stable" },
  ];
  const tabs = ["All", "Incomplete", "Schedule"];
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState('');
  const [profiles, setProfiles] = useState(mockProfiles);

  // (Filtering and tab logic would go here for real data...)

  return (
    <div className="pm-bg">
      <ProfileHeader />
      <main className="pm-main">
        <section className="pm-stats-row">
          {stats.map((s, idx) =>
            <StatsCard
              key={s.subcaption}
              number={s.number}
              subcaption={s.subcaption}
              color={s.color}
              description={s.description}
            />
          )}
        </section>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <SearchActionBar
          searchQuery={search}
          onSearch={setSearch}
          onCreate={() => alert("Create Profile Clicked!")}
        />
        <ProfileTable profiles={profiles} />
      </main>
    </div>
  );
}
