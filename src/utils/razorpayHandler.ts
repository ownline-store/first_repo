//   // Razorpay payment handler using JavaScript SDK
// // This allows us to handle payment success without redirect URLs

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// export interface RazorpayOptions {
//   key: string;
//   amount: number;
//   currency: string;
//   name: string;
//   description: string;
//   order_id?: string;
//   handler: (response: any) => void;
//   remember_customer?: boolean;
//   prefill?: {
//     name?: string;
//     email?: string;
//     contact?: string;
//   };
//   notes?: Record<string, string>;
//   theme?: {
//     color?: string;
//   };
// }

// export interface PaymentResponse {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
// }

// // Load Razorpay script dynamically
// export const loadRazorpayScript = (): Promise<void> => {
//   return new Promise((resolve, reject) => {
//     if (window.Razorpay) {
//       resolve();
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => resolve();
//     script.onerror = () => reject(new Error('Failed to load Razorpay script'));
//     document.body.appendChild(script);
//   });
// };

// export const createRazorpayOrder = async (amount: number, currency: string ): Promise<string> => {
//   const LAMBDA_URL = 'https://mdfqu27sbi.execute-api.eu-north-1.amazonaws.com/default/razorpay-create-order'; // <-- your Lambda URL

//   const response = await fetch(LAMBDA_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ amount })
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to create order: ${response.statusText}`);
//   }

//   const data = await response.json();

//   if (!data.orderId) {
//     throw new Error('Order ID not returned from Lambda');
//   }

//   return data.orderId;
// };



// // Open Razorpay payment modal
// export const openRazorpayPayment = async (
//   amount: number,
//   onSuccess: (response: PaymentResponse) => void,
//   onError: (error: any) => void
// ): Promise<void> => {
//   try {
//     // Load Razorpay script
//     await loadRazorpayScript();
    
//     // Check if Razorpay Key ID is available
//     const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
//     if (!razorpayKeyId || razorpayKeyId === 'rzp_test_your_key_id') {
//       throw new Error('Razorpay Key ID not configured. Please add VITE_RAZORPAY_KEY_ID to your .env file.');
//     }
//     const orderId = await createRazorpayOrder(amount,'INR');
//     console.log('orderId:', orderId);

//     // Razorpay options (without order_id for direct payment)
//     const options: RazorpayOptions = {
//       key: razorpayKeyId,
//       amount: amount * 100, // Amount in paise
//       currency: 'INR',
//       name: 'OwnlineStore',
//       description: 'Instagram 0-100k Followers Roadmap',
//       handler: onSuccess,
//       order_id: orderId,
//       remember_customer: false,
//       prefill: {},
//       notes: {
//         product: 'Instagram 0-100k Followers Roadmap',
//         payment_id: `pay_${Date.now()}`
//       },
//       theme: {
//         color: '#7c3aed' // Purple color matching your theme
//       }
//     };

//     // Open Razorpay modal
//     const razorpay = new window.Razorpay(options);
//     razorpay.on('payment.failed', onError);
//     razorpay.open();
//   } catch (error) {
//     console.error('Error opening Razorpay payment:', error);
//     onError(error);
//   }
// };

// // Verify payment signature (simplified for frontend-only implementation)
// export const verifyPaymentSignature = async (
//   orderId: string,
//   paymentId: string,
//   signature: string
// ): Promise<boolean> => {
//   try {
//     // For frontend-only implementation, we'll trust Razorpay's response
//     // In production, you should verify the signature on your backend
//     console.log('Payment verification:', { orderId, paymentId, signature });
//     return true;
//   } catch (error) {
//     console.error('Error verifying payment:', error);
//     return false;
//   }
// };

declare global {
  interface Window {
    Razorpay: any;
  }
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

// Call Lambda to create Razorpay order
export const createRazorpayOrder = async (amount: number): Promise<string> => {
  const LAMBDA_URL =
    'https://ztmphr0cej.execute-api.eu-north-1.amazonaws.com/default/razorpay-create-order/createRzpOrder';

  const response = await fetch(LAMBDA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create order: ${response.statusText}`);
  }

  const data = await response.json();
  if (!data.orderId) throw new Error('Order ID not returned from Lambda');

  return data.orderId;
};

// Open Razorpay payment modal
export const openRazorpayPayment = async (
  amount: number,
  onSuccess: (response: PaymentResponse) => void,
  onError: (error: any) => void
): Promise<void> => {
  try {
    await loadRazorpayScript();

    const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKeyId || razorpayKeyId === 'rzp_test_your_key_id') {
      throw new Error(
        'Razorpay Key ID not configured. Please add VITE_RAZORPAY_KEY_ID to your .env file.'
      );
    }

    // 1️⃣ Get order ID from Lambda
    const orderId = await createRazorpayOrder(amount);
    console.log('Razorpay Order ID:', orderId);

    // 2️⃣ Configure Razorpay checkout options
    const options = {
      key: razorpayKeyId,
      amount: amount * 100, // in paise
      currency: 'INR',
      name: 'OwnlineStore',
      description: 'Instagram 0-100k Followers Roadmap',
      order_id: orderId,
      handler: onSuccess,
      notes: { product: 'Instagram 0-100k Followers Roadmap' },
      theme: { color: '#7c3aed' },
    };

    // 3️⃣ Open Razorpay modal
    const razorpay = new window.Razorpay(options);
    razorpay.on('payment.failed', (err: any) => {
      console.error('Payment failed:', err);
      onError(err);
    });
    razorpay.open();
  } catch (error) {
    console.error('Error opening Razorpay payment:', error);
    onError(error);
  }
};

// Optional: frontend-only signature verification (just logs)
export const verifyPaymentSignature = async (
  orderId: string,
  paymentId: string,
  signature: string
): Promise<boolean> => {
  console.log('Payment verification (frontend-only):', {
    orderId,
    paymentId,
    signature,
  });
  return true;
};

