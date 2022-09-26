import React from 'react'
import styles from "../../../Static/js(css-styles)/ProductLook";
import Footer from '../../Footer/Footer'
import { AddShoppingCart } from '@material-ui/icons'



import {  CardMedia, CardContent, CardActions,FormControl, Typography, IconBot, IconButton ,Grid,Container,InputLabel, Select, MenuItem, Button} from '@material-ui/core'
const ProductLook = ({product,onAddToCart}) => {
  const classes = styles()
  
  return (
    <div>
      <div className={classes.toolbar} />
      
      <Container>
      <div className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <br />
        <CardContent >
            <div className={classes.CardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.price.formatted_with_symbol}
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  
                  
                  
                </FormControl>
                    <IconButton className='classes.button' size="medium" aria-label='Add to Cart' onClick={() => onAddToCart(product.id,1)}>
                        <AddShoppingCart />
                    </IconButton>

            
            </div>
            </CardContent>
            
                {/* <Typography variant="body2" color="textSecondary">{product.description}</Typography> */}
              <h2><strong>Všetko o produkte</strong></h2>
              <Typography dangerouslySetInnerHTML={{ __html: product.description }} style={{width:'95%',marginLeft:'auto',marginRight:'auto'}} variant="body2" color="textSecondary" component="p" /> 
                
            
        


      </div></Container>
      
      <Grid style={{position:'absolute',width:'100%',marginTop:'3em'}}><Footer/></Grid>
    </div>
  )
}

export default ProductLook
