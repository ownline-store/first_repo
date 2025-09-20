# Firebase Analytics Setup Guide

## 1. Get Your Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click on the gear icon (⚙️) → Project Settings
4. Scroll down to "Your apps" section
5. Click on the web app icon (`</>`) or "Add app" if you haven't created one
6. Register your app with a nickname (e.g., "Instagram Roadmap")
7. Copy the Firebase configuration object

## 2. Create Environment Variables

Create a `.env` file in your project root with your Firebase config:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## 3. Enable Analytics in Firebase

1. In Firebase Console, go to Analytics → Events
2. Make sure Google Analytics is enabled for your project
3. If not enabled, click "Enable Google Analytics"

## 4. Test Analytics

1. Run your development server: `npm run dev`
2. Open your site in the browser
3. Open Developer Tools → Network tab
4. Look for requests to `google-analytics.com` or `googletagmanager.com`
5. Check Firebase Console → Analytics → Events for real-time data

## 5. What's Being Tracked

### Automatic Tracking:
- **Page Views**: Every page visit
- **Scroll Depth**: 25%, 50%, 75%, 100% scroll milestones
- **Button Clicks**: "Get Instant Access" and "Pay with Razorpay" buttons

### Custom Events:
- **CTA Clicks**: Track which call-to-action buttons are clicked
- **Purchase Intent**: When users click the payment button
- **Add to Cart**: E-commerce tracking for the product
- **Form Submissions**: Contact form interactions

### E-commerce Events:
- **Add to Cart**: When users click "Pay ₹299 with Razorpay"
- **Purchase Intent**: Tracks purchase interest
- **Product Views**: Tracks when users view the product

## 6. View Analytics Data

1. Go to Firebase Console → Analytics
2. Check "Events" tab for real-time data
3. Check "Audiences" tab for user insights
4. Check "Conversions" tab for goal tracking

## 7. Custom Events Available

You can track additional events by importing and using:

```typescript
import { trackEvent, trackButtonClick, trackFormSubmit } from './firebase/analytics';

// Track custom events
trackEvent('custom_event_name', { parameter: 'value' });

// Track button clicks
trackButtonClick('button_name', 'page_location');

// Track form submissions
trackFormSubmit('form_name', true);
```

## 8. Privacy Considerations

- Analytics data is collected anonymously
- No personal information is tracked
- Users can opt-out through browser settings
- GDPR compliant (no cookies for basic analytics)

## 9. Troubleshooting

### Analytics not showing data:
1. Check if environment variables are set correctly
2. Verify Firebase project has Analytics enabled
3. Check browser console for errors
4. Ensure you're testing on the actual domain (not localhost)

### Build errors:
1. Make sure all Firebase imports are correct
2. Check if all environment variables are defined
3. Verify Firebase configuration is valid

## 10. Production Deployment

When deploying to Vercel:
1. Add environment variables in Vercel dashboard
2. Go to Project Settings → Environment Variables
3. Add all VITE_FIREBASE_* variables
4. Redeploy your project

The analytics will start collecting data immediately after deployment!
