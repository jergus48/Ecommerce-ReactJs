import React from 'react'
import Product from "../Product/Product";
import styles from "../../../Static/js(css-styles)/Products"
import {Link} from 'react-router-dom'
import { Grid,ButtonGroup,Button ,ButtonBase ,Box,Typography } from "@material-ui/core";
const Notebooks = ({products,onAddToCart},num) => {
  const classes = styles()
  console.log(products)
  return (
    <div>
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <Grid style={{display:"flex", justifyContent:'center'}}>
        <Typography variant="h4" >
          <strong>Notebooks</strong>
        </Typography>
        </Grid>
        
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
                    {products.map((product) => {num = 0;  if(product.categories[num].name == "Notebooks")
                    
                    {return(
                    <Grid style={{ textDecoration: 'none' }} component={Link} to={"/"+product.id} item key={product.id} data-id={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product  product={product}  onAddToCart={onAddToCart}/>  
                        
                    </Grid>)}})}
                    
              
          </Grid>
      </main>
    </div>
  )
}

export default Notebooks
