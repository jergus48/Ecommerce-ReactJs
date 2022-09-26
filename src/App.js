import React,{useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import "./Static/js(css-styles)/App.css"
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import {Navbar,Products,CartPage,Checkout,ProductLook, Footer,Notebooks,Mobiles} from './components'

function App() {
    
    const [products, SetProducts] = useState([]);
    const[Cart,setCart] = useState({});
    const[Order,setOrder] = useState({});
    const [error,setErrorMessage] = useState("");
    const [Shipping,setShipping] = useState(0);
    

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        console.log({data})
        SetProducts(data)};

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
          };
    const handleAddToCart = async (productId, quantity,variantId) => {
        const item = await commerce.cart.add(productId, quantity,variantId);

        setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

 
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    console.log("nerefresh")
    setCart(newCart);
    console.log("refresh");
  };
  
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
      console.log(error)
    }
  
  };
          



    
    useEffect(() => {
        fetchProducts();
        fetchCart();
        
    }, [])
   

    
    try {
    
            return(
                <Router>
                    <div className='App'>
                        
                        <Navbar totalItems={Cart.total_items}/>
                        <div className='main'>
                            <Routes>
                                <Route exact path="/" element={<Products  products={products} onAddToCart={handleAddToCart}/>}/>
                                <Route exact path="/Mobiles" element={<Mobiles  products={products} onAddToCart={handleAddToCart}/>}/>
                                <Route exact path="/Notebooks" element={<Notebooks  products={products} onAddToCart={handleAddToCart}/>}/> 
                                
                                <Route exact path="/cart" element={ <CartPage Cart={Cart} onUpdateCartQty={handleUpdateCartQty}
                                  onEmptyCart={handleEmptyCart}/>}/>
                                <Route exact path="/Checkout" element={<Checkout cart={Cart} Order={Order} handleCaptureCheckout={handleCaptureCheckout} error={error}/>}/>
                                {products.map((product) => {return(
                                <Route exact path={"/"+product.id} element={<ProductLook products={products} product={product}  onAddToCart={handleAddToCart}/>}/>
                                 
                               )})}
                                
                                   
                                
                            </Routes>
                        
                        
                            
                           
                          </div>
                          
                          
                        
                    <script> </script> 
                    </div>
                </Router>
                
            );
          } catch (error) {
            window.location.reload(false)
          }
    
}

export default App;