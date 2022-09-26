import React from "react";
import { Grid,ButtonGroup,Button ,ButtonBase ,Box } from "@material-ui/core";
import Product from "./Product/Product";
import styles from "../../Static/js(css-styles)/Products"
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Products_buttons from './Products_buttons'



const Products = ({products, onAddToCart, total,NumP}) => {
    const classes = styles()
     NumP=0
     console.log(products)
    return (
        <div>
            <div className={classes.toolbar} />
            <Products_buttons/>
            
           
            
  
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => {if (product.inventory.available > 0){if (NumP <3){NumP +=1 ;return(
                    <Grid style={{ textDecoration: 'none' }} component={Link} to={"/"+product.id} item key={product.id} data-id={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product  product={product} total={total} onAddToCart={onAddToCart}/>  {/*newest products=products[products.length-1,2,3] */}
                        
                    </Grid>)}}})}
                    
              
                </Grid>

            </main>
            <Grid style={{position:'fixed',bottom: 0,width:'100%'}}><Footer/></Grid>
        </div>
    )
    
}
export default Products;