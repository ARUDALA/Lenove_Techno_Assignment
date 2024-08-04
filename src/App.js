import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main>
          <Switch>
            <Route path="/overview" component={Overview} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;