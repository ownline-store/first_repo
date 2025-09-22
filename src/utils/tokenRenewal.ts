// Token renewal utilities
// This handles expired token scenarios and provides renewal options

export interface TokenInfo {
  isValid: boolean;
  isExpired: boolean;
  ageInDays: number;
  daysSinceExpiry: number;
  timestamp: number;
  paymentId?: string;
}

export const analyzeToken = (token: string): TokenInfo => {
  const result: TokenInfo = {
    isValid: false,
    isExpired: false,
    ageInDays: 0,
    daysSinceExpiry: 0,
    timestamp: 0
  };

  if (!token) return result;

  try {
    const parts = token.split('_');
    if (parts.length !== 3) return result;

    const timestamp = parseInt(parts[0], 36);
    const now = Date.now();
    const tokenAge = now - timestamp;
    const ageInDays = Math.floor(tokenAge / (1000 * 60 * 60 * 24));
    const maxAgeDays = 7;

    result.timestamp = timestamp;
    result.ageInDays = ageInDays;
    result.isExpired = ageInDays > maxAgeDays;
    result.daysSinceExpiry = Math.max(0, ageInDays - maxAgeDays);
    result.isValid = !result.isExpired;

    // Try to extract payment ID
    try {
      const paymentHash = parts[2];
      const paddedHash = paymentHash + '=='.substring(0, (4 - paymentHash.length % 4) % 4);
      result.paymentId = atob(paddedHash);
    } catch (error) {
      console.error('Error extracting payment ID:', error);
    }

  } catch (error) {
    console.error('Error analyzing token:', error);
  }

  return result;
};

export const getExpiryMessage = (tokenInfo: TokenInfo): string => {
  if (!tokenInfo.isExpired) {
    return `Your access is valid for ${7 - tokenInfo.ageInDays} more days.`;
  }

  if (tokenInfo.daysSinceExpiry === 1) {
    return 'Your download access expired yesterday. Please contact support to renew your access.';
  } else if (tokenInfo.daysSinceExpiry < 7) {
    return `Your download access expired ${tokenInfo.daysSinceExpiry} days ago. Please contact support to renew your access.`;
  } else if (tokenInfo.daysSinceExpiry < 30) {
    return `Your download access expired ${tokenInfo.daysSinceExpiry} days ago. Please contact support to renew your access.`;
  } else {
    return 'Your download access has been expired for a long time. Please contact support to renew your access.';
  }
};

export const createRenewalEmail = (tokenInfo: TokenInfo): string => {
  const subject = 'Renew PDF Access Request';
  const body = `Hi,

My download access for the Instagram 0-100k Followers Roadmap has expired.

Token Information:
- Access expired: ${tokenInfo.daysSinceExpiry} days ago
- Payment ID: ${tokenInfo.paymentId || 'Unable to extract'}
- Original purchase date: ${new Date(tokenInfo.timestamp).toLocaleDateString()}

Please help me renew my access to the PDF.

Thank you!`;

  return `mailto:services@ownlinestore.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};


export const shouldAllowRenewal = (tokenInfo: TokenInfo): boolean => {
  // Allow renewal if expired within last 30 days
  return tokenInfo.isExpired && tokenInfo.daysSinceExpiry <= 30;
};

export const getRenewalOptions = (tokenInfo: TokenInfo) => {
  const options = [];

  if (tokenInfo.isExpired) {
    if (tokenInfo.daysSinceExpiry <= 7) {
      options.push({
        type: 'quick_renewal',
        title: 'Quick Renewal',
        description: 'Your access expired recently. Contact support for quick renewal.',
        action: 'email_support'
      });
    } else if (tokenInfo.daysSinceExpiry <= 30) {
      options.push({
        type: 'standard_renewal',
        title: 'Standard Renewal',
        description: 'Your access expired some time ago. Contact support for renewal.',
        action: 'email_support'
      });
    } else {
      options.push({
        type: 'new_purchase',
        title: 'New Purchase Required',
        description: 'Your access has been expired for too long. Consider making a new purchase.',
        action: 'redirect_to_purchase'
      });
    }
  }

  return options;
};
