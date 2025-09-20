import { useEffect, useState } from 'react';
import { CheckCircle, Download, ArrowRight, Shield, Star } from 'lucide-react';
import { trackEvent, trackPurchase } from '../firebase/analytics';

export default function PaymentSuccess() {
  const [downloadLink, setDownloadLink] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Track successful purchase
    trackPurchase(299, 'INR', `purchase_${Date.now()}`);
    trackEvent('purchase_success', {
      product_name: 'Instagram 0-100k Followers Roadmap',
      price: 299,
      currency: 'INR'
    });

    // Generate secure download link (you'll replace this with your actual PDF link)
    const pdfLink = 'https://drive.google.com/file/d/1fvw9LM2EROakUh5TkSLOk7PVCCJxZTZO/view?usp=drive_link';
    setDownloadLink(pdfLink);
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    trackEvent('pdf_download', {
      product_name: 'Instagram 0-100k Followers Roadmap'
    });
    
    // Open the download link
    window.open(downloadLink, '_blank');
    
    // Reset downloading state after a delay
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Successful! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your purchase. Your Instagram growth roadmap is ready for download.
            </p>
          </div>

          {/* Download Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Instagram 0-100k Followers Roadmap
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get instant access to the complete guide that will transform your Instagram growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative">
                <img 
                  src="/images/Poster - Maximize Your Impact.png" 
                  alt="Instagram 0-100k Followers Roadmap - Ebook Cover"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">Instagram 0-100k</div>
                    <div className="text-sm opacity-90">Followers Roadmap</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">What's Included:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Complete step-by-step roadmap</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>50+ viral content templates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Algorithm optimization guide</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Monetization strategies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Growth hacks & techniques</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Preparing Download...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download PDF Now
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    <Shield className="w-4 h-4 inline mr-1" />
                    Secure download • Instant access
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What's Next?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Download & Read</h4>
                <p className="text-sm text-gray-600">Get your PDF and start implementing the strategies immediately.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Follow the Roadmap</h4>
                <p className="text-sm text-gray-600">Use the step-by-step guide to grow your Instagram following.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Track Your Growth</h4>
                <p className="text-sm text-gray-600">Monitor your progress and celebrate your milestones.</p>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about the roadmap or need support, we're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:services@ownlinestore.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="/"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">30-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
