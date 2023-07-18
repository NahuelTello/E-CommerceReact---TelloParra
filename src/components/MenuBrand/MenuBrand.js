import React from 'react'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from 'react-router-dom';
import './MenuBrand.css'

const MenuPositions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: '1rem',
      fontStyle:'18',
      fontWeight: 500,
      textTransform: "lowercase",
      fontFamily: 'Monserrat'
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "black",
      fontSize: '1rem',
      textDecoration: "none",
    },
  };
  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>M</span>odelos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link style={styles.link} to="/product-brand/Nike">
            Nike
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={styles.link} to="/product-brand/Adidas">
            Adias
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default MenuPositions