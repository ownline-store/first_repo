# Payment Troubleshooting Guide

## "Oops something went wrong" Error

This error typically occurs due to one of these issues:

### 1. Razorpay Key ID Not Configured

**Error:** "Razorpay Key ID not configured"

**Solution:**
1. Add your Razorpay Key ID to `.env` file:
   ```env
   VITE_RAZORPAY_KEY_ID=rzp_test_your_actual_key_id
   ```

2. Get your Key ID from Razorpay Dashboard:
   - Go to Razorpay Dashboard → Settings → API Keys
   - Copy your Key ID (starts with `rzp_test_` or `rzp_live_`)

### 2. Network Issues

**Error:** "Failed to load Razorpay script"

**Solution:**
- Check internet connection
- Try refreshing the page
- Check if Razorpay's CDN is accessible

### 3. Browser Blocking Scripts

**Error:** Script loading blocked

**Solution:**
- Disable ad blockers temporarily
- Check browser console for blocked requests
- Try in incognito/private mode

### 4. Environment Variables Not Loading

**Error:** Key ID shows as placeholder

**Solution:**
1. Restart development server:
   ```bash
   npm run dev
   ```

2. Check `.env` file is in project root
3. Verify environment variable name: `VITE_RAZORPAY_KEY_ID`

## Testing Steps

### 1. Check Environment Variables
```javascript
// Add this to browser console to check
console.log('Razorpay Key:', import.meta.env.VITE_RAZORPAY_KEY_ID);
```

### 2. Test Razorpay Script Loading
```javascript
// Check if Razorpay is loaded
console.log('Razorpay available:', typeof window.Razorpay !== 'undefined');
```

### 3. Test Payment Modal
```javascript
// Test basic Razorpay functionality
if (window.Razorpay) {
  const options = {
    key: 'rzp_test_your_key_id',
    amount: 29900,
    currency: 'INR',
    name: 'Test',
    description: 'Test Payment',
    handler: function(response) {
      console.log('Payment successful:', response);
    }
  };
  const razorpay = new window.Razorpay(options);
  razorpay.open();
}
```

## Fallback Solutions

### 1. Use Payment Link Instead
If the SDK fails, the system will offer a fallback payment link.

### 2. Manual Payment Link
You can also use your existing Razorpay payment link directly:
```
https://razorpay.me/@ownlinestore?amount=29900
```

### 3. Alternative Payment Methods
Consider adding other payment options like:
- PayPal
- Stripe
- UPI direct

## Common Solutions

### For Development:
1. **Use Test Credentials:**
   ```env
   VITE_RAZORPAY_KEY_ID=rzp_test_1234567890abcdef
   ```

2. **Test with Razorpay Test Cards:**
   ```
   Card: 4111 1111 1111 1111
   Expiry: Any future date
   CVV: Any 3 digits
   ```

### For Production:
1. **Use Live Credentials:**
   ```env
   VITE_RAZORPAY_KEY_ID=rzp_live_your_live_key_id
   ```

2. **Verify Domain:**
   - Add your domain to Razorpay dashboard
   - Ensure HTTPS is enabled

## Debug Mode

Enable debug mode by adding this to browser console:
```javascript
localStorage.setItem('debug_payment', 'true');
```

This will show detailed error messages.

## Support

If issues persist:
1. Check Razorpay Dashboard for any restrictions
2. Verify account status (active/suspended)
3. Contact Razorpay support
4. Contact us: services@ownlinestore.com

## Quick Fix Checklist

- [ ] Razorpay Key ID added to `.env`
- [ ] Development server restarted
- [ ] Internet connection stable
- [ ] Ad blockers disabled
- [ ] Browser console checked for errors
- [ ] Test credentials used
- [ ] Fallback payment link tested
