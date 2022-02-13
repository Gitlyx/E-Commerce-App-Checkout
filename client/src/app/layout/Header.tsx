import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Badge,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];
const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const NavStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "text.secondary" },
};

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component={NavLink} end to="/" sx={NavStyles}>
          E-CHARLIESHOP
        </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={NavStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <IconButton size="large" sx={{ color: "inherit" }}>
          <Badge badgeContent={22} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{ display: "flex" }}>
          {rightLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={NavStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
