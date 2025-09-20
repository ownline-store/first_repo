# PDF Delivery Setup Guide

## How to Set Up PDF Delivery After Payment

### Method 1: Google Drive (Recommended - Easiest)

1. **Upload your PDF to Google Drive:**
   - Go to [Google Drive](https://drive.google.com)
   - Upload your PDF file
   - Right-click on the file → "Get link"
   - Change sharing to "Anyone with the link can view"
   - Copy the sharing link

2. **Update the Download Link:**
   - Open `src/pages/PaymentSuccess.tsx`
   - Find line 15: `const pdfLink = 'https://drive.google.com/file/d/YOUR_PDF_FILE_ID/view?usp=sharing';`
   - Replace `YOUR_PDF_FILE_ID` with your actual Google Drive file ID

3. **Get the File ID:**
   - Your Google Drive link looks like: `https://drive.google.com/file/d/1ABC123DEF456/view?usp=sharing`
   - The file ID is: `1ABC123DEF456`
   - Use this ID in the format: `https://drive.google.com/file/d/1ABC123DEF456/view?usp=sharing`

### Method 2: Direct File Hosting (More Secure)

1. **Upload PDF to your server:**
   - Upload the PDF to your Vercel project's `public` folder
   - Or use a CDN service like Cloudinary, AWS S3, etc.

2. **Update the Download Link:**
   - Change the `pdfLink` to point to your hosted file
   - Example: `const pdfLink = '/pdfs/instagram-roadmap.pdf';`

### Method 3: Secure Download with Authentication (Advanced)

For more security, you can implement a token-based download system:

1. **Generate unique download tokens** after payment
2. **Store tokens in a database** (Firebase Firestore)
3. **Validate tokens** before allowing download
4. **Expire tokens** after a certain time period

## Razorpay Integration

### Update Razorpay Payment Link

1. **Go to Razorpay Dashboard:**
   - Login to your Razorpay account
   - Go to "Payment Links" section

2. **Create/Edit Payment Link:**
   - Set amount: ₹299
   - Add success redirect URL: `https://www.ownlinestore.com/payment-success`
   - Add failure redirect URL: `https://www.ownlinestore.com/?payment=failed`

3. **Update Environment Variable:**
   - Add to your `.env` file: `VITE_RAZORPAY_URL=your-razorpay-payment-link`

### Webhook Setup (Optional)

For automatic verification:

1. **Create Webhook in Razorpay:**
   - Go to Settings → Webhooks
   - Add webhook URL: `https://www.ownlinestore.com/webhook.html`
   - Select events: `payment.captured`

2. **Verify Payment:**
   - The webhook will verify payment status
   - Redirect to success page automatically

## Testing the Flow

1. **Test Payment:**
   - Use Razorpay test mode
   - Complete a test payment
   - Verify redirect to success page

2. **Test Download:**
   - Click download button
   - Verify PDF opens/downloads
   - Check analytics events

## Analytics Tracking

The system automatically tracks:
- ✅ Payment success events
- ✅ PDF download events
- ✅ Purchase completion
- ✅ User engagement

## Security Considerations

1. **PDF Protection:**
   - Consider password-protecting the PDF
   - Add watermarks with customer email
   - Use time-limited download links

2. **Access Control:**
   - Verify payment before showing download
   - Log download attempts
   - Prevent unauthorized access

## Customization Options

### Add Customer Information
```typescript
// In PaymentSuccess.tsx, you can add:
const [customerEmail, setCustomerEmail] = useState('');
const [orderId, setOrderId] = useState('');

// Get from URL parameters or payment data
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  setCustomerEmail(urlParams.get('email') || '');
  setOrderId(urlParams.get('payment_id') || '');
}, []);
```

### Add Download Expiry
```typescript
// Add download expiry logic
const [downloadExpiry, setDownloadExpiry] = useState(null);

useEffect(() => {
  // Set expiry to 7 days from now
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  setDownloadExpiry(expiry);
}, []);
```

## Support

If customers have issues:
1. Check payment status in Razorpay dashboard
2. Verify PDF link is working
3. Check browser console for errors
4. Contact support: services@ownlinestore.com

## Next Steps

1. **Upload your PDF** to Google Drive
2. **Update the download link** in PaymentSuccess.tsx
3. **Test the payment flow** with a test payment
4. **Deploy to Vercel** with updated configuration
5. **Monitor analytics** for download tracking

Your PDF delivery system is now ready! 🎉
