// Fallback payment method using Razorpay payment links
// This is a simpler approach that doesn't require SDK

export const openRazorpayPaymentLink = (amount: number): void => {
  try {
    // Create a simple payment link URL
    const baseUrl = window.location.origin;
    const successUrl = `${baseUrl}/payment-success`;
    
    // You can use your existing Razorpay payment link or create a new one
    const razorpayUrl = import.meta.env.VITE_RAZORPAY_URL || 
      `https://razorpay.me/@ownlinestore?amount=${amount * 100}&redirect_url=${encodeURIComponent(successUrl)}`;
    
    // Open payment link in new tab
    window.open(razorpayUrl, '_blank');
  } catch (error) {
    console.error('Error opening payment link:', error);
    alert('Unable to open payment. Please try again.');
  }
};

// Alternative: Use Razorpay's hosted checkout
export const openRazorpayHostedCheckout = (amount: number): void => {
  try {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://api.razorpay.com/v1/checkout/embedded';
    form.target = '_blank';
    
    const keyInput = document.createElement('input');
    keyInput.type = 'hidden';
    keyInput.name = 'key_id';
    keyInput.value = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_your_key_id';
    
    const amountInput = document.createElement('input');
    amountInput.type = 'hidden';
    amountInput.name = 'amount';
    amountInput.value = (amount * 100).toString();
    
    const currencyInput = document.createElement('input');
    currencyInput.type = 'hidden';
    currencyInput.name = 'currency';
    currencyInput.value = 'INR';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'hidden';
    nameInput.name = 'name';
    nameInput.value = 'OwnlineStore';
    
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'hidden';
    descriptionInput.name = 'description';
    descriptionInput.value = 'Instagram 0-100k Followers Roadmap';
    
    form.appendChild(keyInput);
    form.appendChild(amountInput);
    form.appendChild(currencyInput);
    form.appendChild(nameInput);
    form.appendChild(descriptionInput);
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  } catch (error) {
    console.error('Error opening hosted checkout:', error);
    alert('Unable to open payment. Please try again.');
  }
};
