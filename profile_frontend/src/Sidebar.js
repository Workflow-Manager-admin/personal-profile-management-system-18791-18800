import React, { useState } from 'react';
import './Sidebar.css';

// Stub content component for section panels
// PUBLIC_INTERFACE
export function SidebarSectionStub({ label }) {
  return (
    <div style={{
      padding: 32,
      minHeight: 240,
      color: '#667',
      fontSize: 18,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        borderRadius: 10,
        padding: 16,
        background: 'rgba(48,125,252,0.10)'
      }}>
        <strong>{label} - Placeholder</strong>
      </div>
      <div style={{ marginTop: 16, color: '#889' }}>
        This section is under development.
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
/** 
 * Sidebar navigation component for dashboard layouts, now with expand/collapse toggler.
 * @param {Object} props
 * @param {Array<{ label: string, icon?: React.ReactNode, onClick?: () => void, active?: boolean }>} props.items - Navigation items.
 * @param {number} [props.activeIndex] - Index of currently active link.
 * @param {(idx: number) => void} [props.onItemClick] - Handler when an item is clicked.
 * @param {boolean} [props.collapsible] - If true, enable expand/collapse toggler (default true).
 * @param {boolean} [props.collapsed] - Force control collapsed state externally.
 * @param {(collapsed: boolean) => void} [props.onCollapseToggle] - Override: handle toggler externally.
 * @returns {JSX.Element}
 */
function Sidebar({
  items,
  activeIndex,
  onItemClick,
  collapsible = true,
  collapsed: controlledCollapsed,
  onCollapseToggle,
}) {
  // Allow for controlled or uncontrolled collapsed state
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  function handleTogglerClick() {
    if (onCollapseToggle) {
      onCollapseToggle(!collapsed);
    } else {
      setInternalCollapsed(!collapsed);
    }
  }

  return (
    <>
      <nav
        className={`sidebar-nav${collapsed ? ' sidebar-collapsed' : ''}`}
        aria-label="Sidebar Navigation"
      >
        {collapsible && (
          <button
            className="sidebar-toggler"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-pressed={!collapsed}
            tabIndex={0}
            type="button"
            onClick={handleTogglerClick}
          >
            {/* Hamburger / arrow icon: visually intuitive */}
            <span aria-hidden="true" style={{ display: 'inline-block', transition: 'transform 0.2s', transform: collapsed ? 'rotate(180deg)' : 'none' }}>
              {/* Use chevron or hamburger based on collapsed state */}
              {collapsed
                ? (
                  // Right arrow (expand)
                  <svg width="24" height="24" viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" fill="none" stroke="#307DFC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  // Left arrow (collapse)
                  <svg width="24" height="24" viewBox="0 0 24 24"><polyline points="15 6 9 12 15 18" fill="none" stroke="#EA4EC6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )
              }
            </span>
            <span className="sidebar-toggler-label" style={{marginLeft:8, fontWeight:500, fontSize:13, color:'#307DFC', display: collapsed ? 'none' : undefined}}>
              {collapsed ? 'Expand' : 'Collapse'}
            </span>
          </button>
        )}
        <ul className="sidebar-list" style={collapsed ? {display:'none'} : {}}>
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
        {/* Responsive: show item icons/labels in collapsed sidebar: can be improved with icon props */}
        <ul className="sidebar-list-collapsed" style={collapsed ? {marginTop:24} : {display:'none'}}>
          {collapsed && items.map((item, idx) => (
            <li
              key={item.label}
              className={`sidebar-link sidebar-link-mini${activeIndex === idx || item.active ? ' active' : ''}`}
              title={item.label}
              style={{
                padding: '9px',
                borderRadius: 14,
                textAlign:'center',
                fontSize:16,
                minWidth:0,
                minHeight:0,
                justifyContent:'center'
              }}
              onClick={() => onItemClick && onItemClick(idx)}
            >
              {/* If you add icons, uncomment: */}
              {/* {item.icon ? item.icon : <span>{item.label[0]}</span>} */}
              <span>{item.label[0]}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
