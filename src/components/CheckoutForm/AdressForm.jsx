import React,{useState} from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import  FormInput from './CustomTextField'
import {commerce} from '../../lib/commerce'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const AdressForm = ({checkoutToken, next, setshipingPrice}) => {
  
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);
  const methods= useForm();
  
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
   
    
    setShippingCountry(Object.keys(countries)[0]);
  };
  const fetchShippingOptions = async (checkoutTokenId, country) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country });

    setShippingOptions(options);
    setShippingOption(options[0].id);
    setShippingPrice(options[0].price.raw);
  };
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)},[])
  useEffect(() => {
    fetchShippingOptions(checkoutToken.id, shippingCountry)},[shippingCountry])
  // const  Shippingprice = () => setshipingPrice((previousStep) => previousStep = shippingOption)
  //;Shippingprice()
 
  return (
    <div>
      <Typography variant="h6" gutterBottom>Shipping Adress</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => {next({ ...data,shippingOption,shippingPrice});
        

        
        // {raw: 0, formatted: '0.00', formatted_with_symbol: '€0.00', formatted_with_code: '0.00 EUR'}
        console.log(shippingPrice);
        checkoutToken.shipping.price.raw = shippingPrice;
        checkoutToken.shipping.price.formatted =`${shippingPrice}`;
        checkoutToken.shipping.price.formatted_with_symbol =`€${shippingPrice}`;
        checkoutToken.shipping.price.formatted_with_code =`${shippingPrice} EUR`;
         })}> 
          <Grid container spacing={3}>

            <FormInput required={true} name='firstName' label='First Name'/>
            <FormInput required={true} name='lastName' label='Last Name'/>
            <FormInput required={true} name='Tel' label='Telephone Number'/>
            <FormInput required={true} name='email' label='Email'/>
            <FormInput required={true} name='address1' label='Address'/>
            <FormInput required={true} name='city' label='City'/>
            <FormInput required={true} name='zip' label='ZIP/Postal Code'/>
            
            
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption}  label="Shipping" fullWidth onChange={(e) => 
              {setShippingOption(e.target.value.item);
                setShippingPrice(e.target.value.price);
                }}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description}  (${sO.price.formatted_with_symbol})`,price:sO.price.raw  })).map((item) => (
                  <MenuItem key={item.id} value={{ item:item.id,price:item.price}} >
                    {item.label}
                    
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
        </FormProvider>
    </div>
  )
}

export default AdressForm

