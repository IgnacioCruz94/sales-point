import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Counter} from "../Redux/selectors";

export default function NavBar() {
  const itemsAdded = useSelector(Counter);
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="success"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "green" }} to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "green" }} to="/products">
              Products
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "green" }} to="/cart">
              <div>
                  
                  <img 
                    src={"https://image.flaticon.com/icons/png/512/107/107831.png"} 
                    alt="LogoCart" 
                    style={{
                      with: "25px", 
                      height: "20px", 
                      alignSelf: "center"
                    }}
                  /> 
                  _Cart {itemsAdded}
              </div>
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "green" }} to="/invoices">
              Invoices
            </Link>
          </Typography>
          <Typography variant="overline" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "green" }} to="/dashboard">
              Dashboard
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
};