import React from "react";
import {
  Dialpad,
  FitnessCenter,
  AttachMoney,
  MonitorWeight,
} from "@mui/icons-material/";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const muiStyle = {
    // color: "hsl(0, 0%, 47%)",
    width: "30px",
    height: "30px",
  };
  const navLists = [
    {
      text: "Dialpad",
      component: <Dialpad style={muiStyle} />,
      link: "/numcalcu",
    },
    {
      text: "FitnessCenter",
      component: <FitnessCenter style={muiStyle} />,
      link: "/tdeecalcu",
    },
    {
      text: "AttachMoney",
      component: <AttachMoney style={muiStyle} />,
      link: "/pesocalcu",
    },
    {
      text: "MonitorWeight",
      component: <MonitorWeight style={muiStyle} />,
      link: "/bmicalcu",
    },
  ];

  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>Calculator</h1>
      </Link>
      <ul className="sidebar__navlist">
        {navLists.map((nav, index) => (
          <Link key={index} to={nav.link}>
            <li
              className={`sidebar__nav ${
                location.pathname === nav.link && "active nohover"
              }`}
            >
              {nav.component}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
