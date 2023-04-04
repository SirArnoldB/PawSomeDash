import React from "react";
import "./NavBar.css";

import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import HomeIcon from "@rsuite/icons/legacy/Home";
import InfoCicle from "@rsuite/icons/legacy/InfoCircle";
import { Icon } from "@rsuite/icons";
import { MdPets } from "react-icons/md";
import GroupIcon from "@rsuite/icons/legacy/Group";
import { useState } from "react";
import { Avatar } from "rsuite";
import { Link, Outlet } from "react-router-dom";

const NavBar = ({ activeKey, onSelect }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="nav-bar-container">
      <Sidenav
        className="side-nav-bar"
        expanded={expanded}
        defaultOpenKeys={["2"]}
      >
        <Sidenav.Toggle
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
          style={{ marginTop: "0" }}
        />
        <hr />
        <Sidenav.Header>
          <div className="nav-bar-header" style={{ alignItems: "center" }}>
            {expanded && (
              <Avatar
                circle
                src="src/assets/Favicon/pawsomedash-website-favicon-color.svg"
                alt="Logo"
                style={{ height: "5rem", width: "5rem" }}
              />
            )}
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={onSelect}>
            <Nav.Item
              onClick={() => setExpanded(!expanded)}
              eventKey="1"
              icon={<HomeIcon />}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="2"
              title="Dashboard"
              icon={<DashboardIcon />}
            >
              <Nav.Item
                onClick={() => setExpanded(!expanded)}
                eventKey="2-1"
                icon={<Icon as={MdPets} />}
              >
                <Link
                  to="/pets"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Pets
                </Link>
              </Nav.Item>
              {/* <Nav.Item
                onClick={() => setExpanded(!expanded)}
                eventKey="2-2"
                icon={<GroupIcon />}
              >
                <Link
                  to="/organizations"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Organizations
                </Link>
              </Nav.Item> */}
            </Nav.Menu>
            <Nav.Item
              onClick={() => setExpanded(!expanded)}
              eventKey="3"
              icon={<InfoCicle />}
            >
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </Nav.Item>
          </Nav>
          <Outlet />
        </Sidenav.Body>
        <Sidenav.Toggle
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        />
      </Sidenav>
    </div>
  );
};

export default NavBar;
