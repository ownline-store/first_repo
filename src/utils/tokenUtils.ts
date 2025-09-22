// Simple token generation and validation utilities
// In production, you'd want to use a more secure method with server-side validation

export const generateSecureToken = (): string => {
  // Generate a random token with timestamp
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${timestamp}_${randomString}`;
};

export const validateToken = (token: string): boolean => {
  if (!token) return false;
  
  try {
    // Extract timestamp from token
    const parts = token.split('_');
    if (parts.length !== 3) return false; // Updated to match createPaymentToken format
    
    const timestamp = parseInt(parts[0], 36);
    const now = Date.now();
    
    // Token expires after 7 days (more reasonable for payment success)
    const tokenAge = now - timestamp;
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    
    console.log('Token validation:', {
      token,
      timestamp,
      now,
      tokenAge,
      maxAge,
      isValid: tokenAge < maxAge
    });
    
    return tokenAge < maxAge;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
};

export const createPaymentToken = (paymentId: string): string => {
  // Create a token that includes payment ID for verification
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 15);
  const paymentHash = btoa(paymentId).substring(0, 8);
  return `${timestamp}_${randomString}_${paymentHash}`;
};

export const extractPaymentIdFromToken = (token: string): string | null => {
  try {
    const parts = token.split('_');
    if (parts.length !== 3) return null;
    
    const paymentHash = parts[2];
    // This is a simple implementation - in production, you'd want proper encryption
    // Add proper base64 padding
    const paddedHash = paymentHash + '=='.substring(0, (4 - paymentHash.length % 4) % 4);
    return atob(paddedHash);
  } catch (error) {
    console.error('Error extracting payment ID from token:', error);
    return null;
  }
};
