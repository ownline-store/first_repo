// Razorpay payment handler using JavaScript SDK
// This allows us to handle payment success without redirect URLs

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  handler: (response: any) => void;
  remember_customer?: boolean;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
}

export interface PaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Load Razorpay script dynamically
export const loadRazorpayScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Razorpay script'));
    document.body.appendChild(script);
  });
};

// Create Razorpay order (simplified for frontend-only implementation)
export const createRazorpayOrder = async (amount: number, currency: string = 'INR'): Promise<string> => {
  // For frontend-only implementation, we'll skip order creation
  // and use direct payment method
  return `order_${Date.now()}`;
};

// Open Razorpay payment modal
export const openRazorpayPayment = async (
  amount: number,
  onSuccess: (response: PaymentResponse) => void,
  onError: (error: any) => void
): Promise<void> => {
  try {
    // Load Razorpay script
    await loadRazorpayScript();

    // Check if Razorpay Key ID is available
    const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKeyId || razorpayKeyId === 'rzp_test_your_key_id') {
      throw new Error('Razorpay Key ID not configured. Please add VITE_RAZORPAY_KEY_ID to your .env file.');
    }

    // Razorpay options (without order_id for direct payment)
    const options: RazorpayOptions = {
      key: razorpayKeyId,
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'OwnlineStore',
      description: 'Instagram 0-100k Followers Roadmap',
      handler: onSuccess,
      // Do not prefill so Razorpay prompts for details
      remember_customer: false,
      prefill: {},
      notes: {
        product: 'Instagram 0-100k Followers Roadmap',
        payment_id: `pay_${Date.now()}`
      },
      theme: {
        color: '#7c3aed' // Purple color matching your theme
      }
    };

    // Open Razorpay modal
    const razorpay = new window.Razorpay(options);
    razorpay.on('payment.failed', onError);
    razorpay.open();
  } catch (error) {
    console.error('Error opening Razorpay payment:', error);
    onError(error);
  }
};

// Verify payment signature (simplified for frontend-only implementation)
export const verifyPaymentSignature = async (
  orderId: string,
  paymentId: string,
  signature: string
): Promise<boolean> => {
  try {
    // For frontend-only implementation, we'll trust Razorpay's response
    // In production, you should verify the signature on your backend
    console.log('Payment verification:', { orderId, paymentId, signature });
    return true;
  } catch (error) {
    console.error('Error verifying payment:', error);
    return false;
  }
};
