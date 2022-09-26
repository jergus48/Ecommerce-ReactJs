import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconBot, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from "../../../Static/js(css-styles)/ProductCard";


const Product = ({product,onAddToCart}) => {
  
    const classes = useStyles();
    
    
    
    const first = product.description.split(' ').slice(0, 20).join(' ');
    
    return (
    <div>
      <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent >
            <div className={classes.CardContent}>
                <Typography style={{ textDecoration: 'none' }} gutterBottom variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.price.formatted_with_symbol}
                </Typography>
            </div>
                {/* <Typography variant="body2" color="textSecondary">{first}</Typography> */}
                 <Typography dangerouslySetInnerHTML={{ __html: first }} variant="body2" color="textSecondary" component="p" /> 
                
            
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>

        </CardActions>


      </Card>
    </div>
  )
}

export default Product
