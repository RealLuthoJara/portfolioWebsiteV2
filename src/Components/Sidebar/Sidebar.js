import React, { useState } from "react";
import "./Sidebar.css";

import Home from "../Home/Home";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import SidebarList from "./SidebarList";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const toggleExpand = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container sidebar-section">
      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="sidebar-expand-and-collapse">
          <p onClick={toggleExpand}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>

        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className="container-fluid">
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;
