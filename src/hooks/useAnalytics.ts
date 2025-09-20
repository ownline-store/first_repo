import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent, trackButtonClick, trackScrollDepth } from '../firebase/analytics';

// Hook to automatically track page views
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname, document.title);
  }, [location]);
};

// Hook to track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    let maxScrollDepth = 0;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
      
      // Track milestones: 25%, 50%, 75%, 100%
      if (scrollPercent >= 25 && maxScrollDepth < 25) {
        trackScrollDepth(25);
        maxScrollDepth = 25;
      } else if (scrollPercent >= 50 && maxScrollDepth < 50) {
        trackScrollDepth(50);
        maxScrollDepth = 50;
      } else if (scrollPercent >= 75 && maxScrollDepth < 75) {
        trackScrollDepth(75);
        maxScrollDepth = 75;
      } else if (scrollPercent >= 100 && maxScrollDepth < 100) {
        trackScrollDepth(100);
        maxScrollDepth = 100;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Custom hook for tracking button clicks
export const useButtonTracking = (buttonName: string) => {
  const handleClick = () => {
    trackButtonClick(buttonName);
  };

  return { handleClick };
};

// Custom hook for tracking custom events
export const useEventTracking = () => {
  const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
    trackEvent(eventName, parameters);
  };

  return { trackCustomEvent };
};
