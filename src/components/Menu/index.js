import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Календарь" />
      </ListItem>
    </Link>

    <Link to="/teachers">
      <ListItem button>
        <PeopleIcon>
          <DashboardIcon />
        </PeopleIcon>
        <ListItemText primary="Преподаватели" />
      </ListItem>
    </Link>

      <Link to="/schedule">
        <ListItem button>
          <PeopleIcon>
            <DashboardIcon />
          </PeopleIcon>
          <ListItemText primary="Расписание" />
        </ListItem>
      </Link>

  </div>


);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Сохранённые отчёты</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Текущий месяц" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Последний квартал" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Конец года" />
    </ListItem>
  </div>
);
