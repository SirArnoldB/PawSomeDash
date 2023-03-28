import React from "react";
import "./NavBar.css";

import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import HomeIcon from "@rsuite/icons/legacy/Home";
import InfoCicle from "@rsuite/icons/legacy/InfoCircle";
import { Icon } from "@rsuite/icons";
import { MdPets } from "react-icons/md";
import GroupIcon from "@rsuite/icons/legacy/Group";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { useState } from "react";
import { Avatar } from "rsuite";

const NavBar = ({ activeKey, onSelect }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="nav-bar-container" style={{ width: 250 }}>
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["2"]}
        style={{ height: "100vh" }}
      >
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
          <InputGroup
            inside
            style={{ width: "85%", alignItems: "center", marginLeft: "0.5rem" }}
          >
            <Input />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={onSelect}>
            <Nav.Item eventKey="1" icon={<HomeIcon />}>
              Home
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="2"
              title="Dashboard"
              icon={<DashboardIcon />}
            >
              <Nav.Item eventKey="2-1" icon={<Icon as={MdPets} />}>
                Pets
              </Nav.Item>
              <Nav.Item eventKey="2-2" icon={<GroupIcon />}>
                Organizations
              </Nav.Item>
            </Nav.Menu>
            <Nav.Item eventKey="3" icon={<InfoCicle />}>
              About
            </Nav.Item>
          </Nav>
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
