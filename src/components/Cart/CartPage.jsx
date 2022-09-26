import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
// import { Link } from 'react-router-dom';

 import CartItem from './CartItem';
import styles from "../../Static/js(css-styles)/Cart.js"
import { Link } from 'react-router-dom';

const Cart = ({ Cart, total,onUpdateCartQty,onEmptyCart }) => {
  const classes = styles();
  


  const renderEmptyCart = () => (
    <div className='classes.contEmpty'>
      <Typography allign="center" variant="subtitle1" >You have no items in your shopping cart,     
      <Typography className={classes.AddItems} component={Link} to="/"  variant="subtitle1" > Add Items</Typography>
        
      </Typography>
      
    </div>
  );

 
  total=0  
  Cart.line_items  && Cart.line_items.map((product) => {total += product.line_total.raw})
  
  const renderCart = () => (
    <>
      <Grid container justify="center" spacing={4}>
                    {Cart.line_items  && Cart.line_items.map((product) => {return(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <CartItem item={product} onUpdateCartQty={onUpdateCartQty}  />
                    </Grid>)})}
                    
          
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Total: {total} €</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=> onEmptyCart()} >Empty cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
      
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { Cart.total_items == 0 ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;