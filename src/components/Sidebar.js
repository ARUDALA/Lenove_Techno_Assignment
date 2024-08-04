import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/overview">Overview</NavLink></li>
          <li><NavLink to="/analytics">Analytics</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;