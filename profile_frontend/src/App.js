import React from 'react';
import './App.css';
import ProfileDashboard from './ProfileDashboard';

// PUBLIC_INTERFACE
function App() {
  // The UI is focused on displaying the Profile Management dashboard per design specs.
  return (
    <div className="App">
      <ProfileDashboard />
    </div>
  );
}

export default App;
