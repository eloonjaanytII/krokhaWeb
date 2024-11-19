import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Messages from './components/messages/Messages';
import Sidebar from './components/sidebar/Sidebar';
import Settings from './components/settings/Settings';
import Profile from './components/profile/Profile';
import Users from './components/users/Users';
import Login from './components/login/Login';

const App = () => {
  return (
    <div className="app__wrapper">
      <div className="sidebar__wrapper">
        <Sidebar />
      </div>
      <div className="content__wrapper">
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;