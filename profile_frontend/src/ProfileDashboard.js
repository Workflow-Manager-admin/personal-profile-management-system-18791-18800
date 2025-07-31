import React, { useState } from "react";
import "./ProfileDashboard.css";

// Placeholder user data
const placeholderProfiles = [
  {
    id: 1,
    name: "Maya Gonzalez",
    email: "maya.gonzalez@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-06-12",
  },
  {
    id: 2,
    name: "John Lee",
    email: "john.lee@example.com",
    role: "User",
    status: "Pending",
    lastLogin: "2024-05-30",
  },
  {
    id: 3,
    name: "Ava Carter",
    email: "ava.carter@example.com",
    role: "Editor",
    status: "Suspended",
    lastLogin: "2024-05-20",
  },
  {
    id: 4,
    name: "Samir Khan",
    email: "samir.khan@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-07-01",
  },
  {
    id: 5,
    name: "Louise Dupont",
    email: "louise.dupont@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-06-30",
  },
];

// Dashboard filter tabs
const filterTabs = ["All", "Active", "Pending", "Suspended"];

// Info cards data (static counts)
const infoCards = [
  { label: "Total Profiles", value: 1245, icon: "👥", bg: "card-bg-gradient-1" },
  { label: "Active", value: 1130, icon: "✅", bg: "card-bg-gradient-2" },
  { label: "Pending", value: 78, icon: "⏳", bg: "card-bg-gradient-3" },
  { label: "Suspended", value: 37, icon: "🚫", bg: "card-bg-gradient-4" },
];

// PUBLIC_INTERFACE
/**
 * Profile Management Dashboard Page
 * Displays UI for managing user profiles including info cards, filter tabs, search, create button, and profiles table.
 */
function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  // Filter profiles by tab and search input
  const filteredProfiles = placeholderProfiles.filter((profile) => {
    const matchesTab =
      activeTab === "All" ? true : profile.status === activeTab;
    const matchesSearch =
      searchValue === "" ||
      profile.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      profile.email.toLowerCase().includes(searchValue.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="dashboard-bg">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-gradient" />
        <h1 className="dashboard-title">Profile Management</h1>
        <p className="dashboard-subtitle">
          Manage user accounts, permissions, and details with ease.
        </p>
      </div>
      {/* Info cards */}
      <div className="dashboard-info-cards">
        {infoCards.map((card) => (
          <div key={card.label} className={`info-card ${card.bg}`}>
            <span className="info-card-icon">{card.icon}</span>
            <span className="info-card-label">{card.label}</span>
            <span className="info-card-value">{card.value}</span>
          </div>
        ))}
      </div>
      {/* Filter tabs and actions */}
      <div className="dashboard-filters">
        <div className="filter-tabs" role="tablist">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
              role="tab"
              aria-selected={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="dashboard-actions">
          <input
            className="profile-search"
            type="text"
            placeholder="Search profiles…"
            aria-label="Search profiles"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn-create-profile">+ Create Profile</button>
        </div>
      </div>
      {/* Profiles table */}
      <div className="profile-table-card">
        <table className="profile-table">
          <thead>
            <tr>
              <th style={{ minWidth: 50 }}>#</th>
              <th style={{ minWidth: 160 }}>Name</th>
              <th style={{ minWidth: 230 }}>Email</th>
              <th style={{ minWidth: 100 }}>Role</th>
              <th style={{ minWidth: 110 }}>Status</th>
              <th style={{ minWidth: 120 }}>Last Login</th>
              <th style={{ minWidth: 120 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfiles.map((profile, i) => (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>
                  <span className={`role-pill role-pill-${profile.role.toLowerCase()}`}>{profile.role}</span>
                </td>
                <td>
                  <span className={`status-badge status-${profile.status.toLowerCase()}`}>{profile.status}</span>
                </td>
                <td>{profile.lastLogin}</td>
                <td>
                  <button className="action-btn view-btn">View</button>
                  <button className="action-btn edit-btn">Edit</button>
                </td>
              </tr>
            ))}
            {filteredProfiles.length === 0 && (
              <tr>
                <td colSpan={7} className="table-empty-message">
                  No profiles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileDashboard;
