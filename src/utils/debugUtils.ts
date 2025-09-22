// Debug utilities for troubleshooting payment and token issues

export const debugToken = (token: string): void => {
  console.log('=== TOKEN DEBUG ===');
  console.log('Token:', token);
  
  if (!token) {
    console.log('❌ Token is empty or null');
    return;
  }
  
  try {
    const parts = token.split('_');
    console.log('Token parts:', parts);
    console.log('Number of parts:', parts.length);
    
    if (parts.length >= 1) {
      const timestamp = parseInt(parts[0], 36);
      const now = Date.now();
      const tokenAge = now - timestamp;
      const tokenAgeHours = tokenAge / (1000 * 60 * 60);
      
      console.log('Timestamp:', timestamp);
      console.log('Current time:', now);
      console.log('Token age (ms):', tokenAge);
      console.log('Token age (hours):', tokenAgeHours.toFixed(2));
      console.log('Token age (days):', (tokenAgeHours / 24).toFixed(2));
    }
    
    if (parts.length >= 3) {
      console.log('Payment hash:', parts[2]);
    }
  } catch (error) {
    console.error('Error parsing token:', error);
  }
  
  console.log('=== END TOKEN DEBUG ===');
};

export const debugPaymentData = (paymentId: string): void => {
  console.log('=== PAYMENT DATA DEBUG ===');
  console.log('Payment ID:', paymentId);
  
  try {
    const key = `payment_${paymentId}`;
    const data = localStorage.getItem(key);
    console.log('Storage key:', key);
    console.log('Stored data:', data);
    
    if (data) {
      const paymentData = JSON.parse(data);
      console.log('Parsed payment data:', paymentData);
      
      const now = Date.now();
      const paymentAge = now - paymentData.timestamp;
      const paymentAgeHours = paymentAge / (1000 * 60 * 60);
      
      console.log('Payment age (hours):', paymentAgeHours.toFixed(2));
      console.log('Payment age (days):', (paymentAgeHours / 24).toFixed(2));
    } else {
      console.log('❌ No payment data found in localStorage');
    }
  } catch (error) {
    console.error('Error debugging payment data:', error);
  }
  
  console.log('=== END PAYMENT DATA DEBUG ===');
};

export const debugUrlParams = (): void => {
  console.log('=== URL PARAMS DEBUG ===');
  
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const paymentId = urlParams.get('payment_id');
  
  console.log('Current URL:', window.location.href);
  console.log('Token from URL:', token);
  console.log('Payment ID from URL:', paymentId);
  
  if (token) {
    debugToken(token);
  }
  
  if (paymentId) {
    debugPaymentData(paymentId);
  }
  
  console.log('=== END URL PARAMS DEBUG ===');
};

// Add to window for easy access in browser console
if (typeof window !== 'undefined') {
  (window as any).debugPayment = {
    token: debugToken,
    payment: debugPaymentData,
    url: debugUrlParams,
    all: () => {
      debugUrlParams();
    }
  };
}
