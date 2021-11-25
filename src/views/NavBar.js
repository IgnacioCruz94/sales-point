import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function NavBar() {
    const [items, setItems] = useState(0);
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to="/products">
              Products
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <div>
                  Cart {items}
                  <img src={"https://image.flaticon.com/icons/png/512/107/107831.png"} alt="LogoCart" style={{with: "25px", height: "20px", alignSelf: "center"}}/>
              </div>
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to="/invoices">
              Invoices
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              Dashboard
            </Link>
          </Typography>
          {/* <Link style={{ textDecoration: "none" }} to="/">
          <Button
                color="success"
                sx={{
                  "&:hover": {
                    backgroundColor: "success.dark",
                    color: "white",
                    opacity: [0.8, 0.8, 0.7]
                  }
                }}
              >
                Log in
              </Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
    )
};