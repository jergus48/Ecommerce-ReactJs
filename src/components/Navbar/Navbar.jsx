import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../Static/media/icon.png'
import styles from "../../Static/js(css-styles)/Navbar.js"
import {Link, useLocation } from 'react-router-dom'

const Navbar = ({totalItems}) => {
  const classes = styles();
  const location = useLocation();
    return (
      <div>
        <AppBar position="fixed" className={classes.AppBar} color="inherit">
          <Toolbar>
              <Typography variant='h6' component={Link} to="/" style={{ textDecoration: 'none',color: "black" }} className={classes.tittle}>
                  <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                  Electro

              </Typography>
              <div className={classes.grow} />
              <div className={classes.button}>
              {location.pathname != '/cart' && (
              <IconButton component={Link} to="/cart" aria-label='Show cart'>
                      <Badge badgeContent={totalItems === undefined || totalItems == 0 ? "0" : totalItems} color="secondary">
                          <ShoppingCart />
                      </Badge>
                      
                  </IconButton>
                  )}
              </div>

          </Toolbar>


        </AppBar>
      </div>
    )
}

export default Navbar
