import React from 'react';
import './Sidebar.css';

// PUBLIC_INTERFACE
/**
 * Sidebar navigation component for dashboard-style layouts.
 * @param {Object} props
 * @param {Array<{ label: string, icon?: React.ReactNode, onClick?: () => void, active?: boolean }>} props.items - List of navigation items.
 * @param {number} [props.activeIndex] - Index of the currently active link (for highlight).
 * @param {(idx: number) => void} [props.onItemClick] - Handler when a sidebar item is clicked.
 * @returns {JSX.Element}
 */
function Sidebar({ items, activeIndex, onItemClick }) {
  return (
    <nav className="sidebar-nav" aria-label="Sidebar Navigation">
      <ul className="sidebar-list">
        {items.map((item, idx) => (
          <li
            key={item.label}
            className={`sidebar-link${activeIndex === idx || item.active ? ' active' : ''}`}
            tabIndex={0}
            onClick={() => onItemClick && onItemClick(idx)}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') onItemClick && onItemClick(idx);
            }}
            aria-current={activeIndex === idx || item.active ? 'page' : undefined}
          >
            {item.icon && <span className="sidebar-icon">{item.icon}</span>}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
