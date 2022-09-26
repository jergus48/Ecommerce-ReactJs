import React,{useState,useEffect} from 'react';
import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';
import {Paper,Stepper, Step, StepLabel,Typography, CircularProdress, CircularProgress,Divider,Button,Grid} from "@material-ui/core";
import styles from "../../../Static/js(css-styles)/Checkout";
import {commerce} from '../../../lib/commerce'

const steps = ['Shipping Adress','Payment details'];





const Checkout = ({cart,Order,handleCaptureCheckout,error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setcheckoutToken] = useState(null)
    const [ShippingData, setShippingData] = useState({})
    const [shipingPrice, setshipingPrice] = useState(0);
    const classes= styles()
    
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type:'cart'})
                console.log(token)
                setcheckoutToken(token)
                console.log("vyslo")
            }
            catch(error) {console.log("error")}
        }
        generateToken(); 
    },[cart])
    const nextStep = () => setActiveStep((previousStep) => previousStep + 1)
    const backStep = () => setActiveStep((previousStep) => previousStep - 1)
    
    const next = (data) => {setShippingData(data);
        nextStep()}
    const Form = () => activeStep === 0 ? <AdressForm setshipingPrice={setshipingPrice} checkoutToken={checkoutToken} next={next}/> : 
    <PaymentForm handleCaptureCheckout={handleCaptureCheckout} nextStep={nextStep} shipingPrice={shipingPrice} shippingData={ShippingData} checkoutToken={checkoutToken} back={backStep}/>
    const Confirmation = () => (
        <div>
            <Grid style={{display:"flex",justifyContent:'center'}}>
            Thank you for you order
            </Grid>
            
        </div>
    )
    console.log(checkoutToken)
    
    return (
    <>
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
        <Paper className={classes.paper}>
            <Typography  variant="h4" allign="center">Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step) => (
                    <Step key="step">
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation/> : checkoutToken && Form()}
        </Paper>

    </main>
    </>
  )
}

export default Checkout
