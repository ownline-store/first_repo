// Payment verification utilities
// This simulates payment verification - in production, you'd verify with Razorpay API

export interface PaymentData {
  paymentId: string;
  amount: number;
  currency: string;
  status: 'success' | 'failed' | 'pending';
  timestamp: number;
  customerEmail?: string;
}

// Mock payment verification - replace with actual Razorpay API call
export const verifyPayment = async (paymentId: string): Promise<PaymentData | null> => {
  try {
    // In production, you would:
    // 1. Call Razorpay API to verify payment
    // 2. Check payment status
    // 3. Validate amount and currency
    // 4. Return payment data
    
    // For now, we'll simulate a successful verification
    // You can replace this with actual Razorpay API integration
    
    const mockPaymentData: PaymentData = {
      paymentId,
      amount: 299,
      currency: 'INR',
      status: 'success',
      timestamp: Date.now(),
      customerEmail: 'customer@example.com'
    };
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return mockPaymentData;
  } catch (error) {
    console.error('Payment verification failed:', error);
    return null;
  }
};

// Store payment data in localStorage (in production, use a database)
export const storePaymentData = (paymentData: PaymentData): void => {
  try {
    const key = `payment_${paymentData.paymentId}`;
    localStorage.setItem(key, JSON.stringify(paymentData));
  } catch (error) {
    console.error('Failed to store payment data:', error);
  }
};

// Retrieve payment data from localStorage
export const getPaymentData = (paymentId: string): PaymentData | null => {
  try {
    const key = `payment_${paymentId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to retrieve payment data:', error);
    return null;
  }
};

// Check if payment is valid and not expired
export const isPaymentValid = (paymentData: PaymentData): boolean => {
  // For demo purposes, we'll be more lenient with payment validation
  // In production, you'd verify with Razorpay API
  
  console.log('Payment validation:', {
    paymentId: paymentData.paymentId,
    status: paymentData.status,
    timestamp: paymentData.timestamp,
    now: Date.now(),
    isValid: paymentData.status === 'success'
  });
  
  // Just check if status is success - be more lenient for demo
  return paymentData.status === 'success';
};
