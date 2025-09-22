# Razorpay SDK Setup Guide

## Overview
This setup uses Razorpay's JavaScript SDK instead of payment links, giving you complete control over the payment flow without needing to set redirect URLs in Razorpay dashboard.

## Benefits of SDK Approach
- ✅ **No Redirect URLs Needed** - Complete control over success/failure handling
- ✅ **Better User Experience** - Payment modal opens in same page
- ✅ **Real-time Verification** - Immediate payment verification
- ✅ **Secure Token Generation** - Automatic secure token creation
- ✅ **Better Analytics** - More detailed payment tracking

## Setup Steps

### 1. Get Razorpay Credentials

1. **Go to Razorpay Dashboard:**
   - Login to your Razorpay account
   - Go to Settings → API Keys

2. **Get Your Keys:**
   - Copy your **Key ID** (starts with `rzp_test_` or `rzp_live_`)
   - Copy your **Key Secret** (keep this secure)

3. **Add to Environment Variables:**
   ```env
   VITE_RAZORPAY_KEY_ID=rzp_test_your_key_id_here
   VITE_RAZORPAY_KEY_SECRET=your_key_secret_here
   ```

### 2. Backend Setup (Optional but Recommended)

For production, you should create backend endpoints to:
- Create Razorpay orders
- Verify payment signatures

**Example Backend Endpoints:**

```javascript
// Create Order Endpoint
app.post('/api/create-order', async (req, res) => {
  const { amount, currency, receipt, notes } = req.body;
  
  const options = {
    amount: amount,
    currency: currency,
    receipt: receipt,
    notes: notes
  };
  
  try {
    const order = await razorpay.orders.create(options);
    res.json({ order_id: order.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify Payment Endpoint
app.post('/api/verify-payment', async (req, res) => {
  const { order_id, payment_id, signature } = req.body;
  
  const crypto = require('crypto');
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${order_id}|${payment_id}`)
    .digest('hex');
  
  const isVerified = expectedSignature === signature;
  res.json({ verified: isVerified });
});
```

### 3. Frontend Configuration

The system is already configured to:
- Load Razorpay SDK dynamically
- Open payment modal
- Handle success/failure callbacks
- Generate secure tokens
- Redirect to success page

### 4. Testing

1. **Test Mode:**
   - Use Razorpay test credentials
   - Test with Razorpay test cards

2. **Test Cards:**
   ```
   Card Number: 4111 1111 1111 1111
   Expiry: Any future date
   CVV: Any 3 digits
   ```

3. **Test Flow:**
   - Click "Pay ₹299 with Razorpay"
   - Payment modal opens
   - Complete test payment
   - Automatic redirect to success page

### 5. Production Deployment

1. **Update Environment Variables:**
   - Change to live Razorpay credentials
   - Update Vercel environment variables

2. **Deploy:**
   - Push to GitHub
   - Vercel auto-deploys
   - Test with real payments

## How It Works

### Payment Flow:
1. **User clicks payment button**
2. **Razorpay SDK loads** (dynamically)
3. **Payment modal opens** (in same page)
4. **User completes payment**
5. **Success callback triggered**
6. **Payment verified** (signature check)
7. **Secure token generated**
8. **Redirect to success page**

### Security Features:
- **Token-based access** (expires in 24 hours)
- **Payment verification** (signature validation)
- **No direct URL access** (requires valid token)
- **Real-time validation** (immediate verification)

## Troubleshooting

### Common Issues:

1. **"Razorpay is not defined"**
   - Check if Razorpay script loaded
   - Verify internet connection

2. **Payment modal not opening**
   - Check Razorpay Key ID
   - Verify amount format (in paise)

3. **Verification failed**
   - Check backend endpoints
   - Verify signature generation

4. **Token validation failed**
   - Check token format
   - Verify token expiry

### Debug Mode:
```javascript
// Add to browser console for debugging
localStorage.setItem('debug_razorpay', 'true');
```

## Analytics Tracking

The system automatically tracks:
- ✅ Payment intent
- ✅ Payment success/failure
- ✅ Payment verification
- ✅ Token generation
- ✅ PDF downloads

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify Razorpay credentials
3. Test with Razorpay test mode
4. Contact support: services@ownlinestore.com

## Next Steps

1. **Add your Razorpay Key ID** to `.env` file
2. **Test the payment flow** with test cards
3. **Deploy to Vercel** with environment variables
4. **Monitor analytics** for payment tracking

Your Razorpay SDK integration is now complete! 🎉
