import { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
const KEY = 'pk_test_51Jy02LETDO0RE9YVY7nBTzW2S3BV7v2yRhSGkAZ44DNp9kNLgyhjWLp2dcpoFsdRPuEK8C0Tltu5DfqjqrD7egNx00BU01MHQI'

const Pay = () => {
 const[stripeToken, setStripeToken] = useState(null)

 const onToken = (token) =>{
  setStripeToken(token)
 } 

useEffect(()=>{
 const makeRequest = async () => {
  try{
   const res = await axios.post('http://localhost:5000/api/checkout/payment',{
    tokenId: stripeToken.id,
    amount:2000,
   })
   console.log(res.data)
  }catch(err) {
   console.log(err)
  }
 };
 stripeToken && makeRequest()
}, [stripeToken])

 return(
  <div
  style={{
   height:'100vh',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
  }}
  >
   <StripeCheckout name="Vintage Shop" image='https://raw.githubusercontent.com/mallowigi/a-file-icon-idea/master/icon.png'
   billingAddress
   shippingAddress
   description = 'your total is $20'
   amount={2000}
   token={onToken}
   stripeKey={KEY}>
   <button
   style={{
    border: 'none',
    width: 120,
    borderRadius: 5,
    padding: '20px',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer'
     
   }}>
Pay Now
   </button>
   </StripeCheckout>
  </div>
 )
}

export default Pay;
