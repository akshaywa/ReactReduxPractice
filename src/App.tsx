import React from 'react';
import { Outlet } from "react-router";
import MenuBar from "./pages/MenuBar";
import './App.css';
const App: React.FC = () => {
  return (
    <div className="app-main">
      <MenuBar />
      <Outlet />
    </div>
  )
}

export default React.memo(App);
