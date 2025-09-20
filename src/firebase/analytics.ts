import { logEvent, setUserId, setUserProperties } from 'firebase/analytics';
import { analytics } from './config';

// Track page views
export const trackPageView = (pageName: string, pageTitle?: string) => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: pageTitle || pageName,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, parameters);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  if (analytics) {
    logEvent(analytics, 'button_click', {
      button_name: buttonName,
      page_location: location || window.location.pathname,
    });
  }
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean = true) => {
  if (analytics) {
    logEvent(analytics, 'form_submit', {
      form_name: formName,
      success: success,
    });
  }
};

// Track e-commerce events
export const trackPurchase = (value: number, currency: string = 'INR', transactionId?: string) => {
  if (analytics) {
    logEvent(analytics, 'purchase', {
      currency: currency,
      value: value,
      transaction_id: transactionId,
    });
  }
};

// Track add to cart events
export const trackAddToCart = (itemName: string, value: number, currency: string = 'INR') => {
  if (analytics) {
    logEvent(analytics, 'add_to_cart', {
      currency: currency,
      value: value,
      items: [{
        item_name: itemName,
        price: value,
        quantity: 1,
      }],
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  if (analytics) {
    logEvent(analytics, 'scroll', {
      scroll_depth: depth,
    });
  }
};

// Set user properties
export const setUserProperty = (property: string, value: string) => {
  if (analytics) {
    setUserProperties(analytics, {
      [property]: value,
    });
  }
};

// Set user ID
export const setUser = (userId: string) => {
  if (analytics) {
    setUserId(analytics, userId);
  }
};
