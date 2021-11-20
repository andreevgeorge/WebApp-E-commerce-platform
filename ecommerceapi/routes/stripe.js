const router = require("express").Router();
const Stripe = require("stripe")
const stripe = Stripe('sk_test_51Jy02LETDO0RE9YVnOqkPVPVpXMYL71X5L6sGuzMUZUSxRXeaLLdrfoIj93zIItNt9dtOTyTOqa41rR8EWYMsXDx00VazX0lDq');
// (process.env.STRIPE_KEY)
router.post("/payment", (req, res) => {
 stripe.charges.create(
   {
     source: req.body.tokenId,
     amount: req.body.amount,
     currency: "usd",
   },
   (stripeErr, stripeRes) => {
     if (stripeErr) {
       res.status(500).json(stripeErr);
     } else {
       res.status(200).json(stripeRes);
     }
   }
 );
});  

module.exports = router
