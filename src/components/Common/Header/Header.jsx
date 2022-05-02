import { AccountCircleRounded, Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Login from "features/Auth/components/Login/Login";
import { logout } from "features/Auth/userSlice";
import { cartItemsCountSelector } from "features/Cart/selectors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Register from "../../../features/Auth/components/Register/Register";
import "./Header.scss";
import logo from "./logo.svg";
const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const [open, setOpen] = useState(false); // dialog control
  //LOGIN FEATURE
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id; // transfer to boolean

  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null); // not close dialog
  // CART FEATURE
  const cartItemsCount = useSelector(cartItemsCountSelector);
  //
  const dispatch = useDispatch();

  const handleLoginDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const handleShowMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    // console.log(logout());
    dispatch(logout());
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React JS System
            </Typography>
            {/* CART FUNCTION */}
            <Link to="/cart">
              <IconButton size="large" aria-label="show 17 new notifications">
                <Badge badgeContent={cartItemsCount} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* LOGIN FUNCTION */}
            {!isLoggedIn && (
              <Button color="inherit" onClick={handleLoginDialog}>
                Login
              </Button>
            )}

            {isLoggedIn && (
              <>
                <IconButton color="inherit" onClick={handleShowMenu}>
                  <AccountCircleRounded />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}>
                  <MenuItem onClick={handleSignOut}>Profile</MenuItem>
                  <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Toolbar>
        </AppBar>

        {/* Dialog */}
      </Box>

      <Dialog open={open} onClose={handleCloseDialog} disableEscapeKeyDown>
        <IconButton
          sx={(theme) => ({
            position: "absolute",
            top: "8px",
            right: "8px",
            color: theme.palette.error.light,
          })}
          onClick={handleCloseDialog}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register onCloseDialog={handleCloseDialog} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Sign in here!
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login onCloseDialog={handleCloseDialog} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Already have an account. Login Here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
