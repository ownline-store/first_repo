export default function Refunds() {
    return (
      <div className="min-h-screen bg-white">
        <main className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Refund Policy
              </h1>
  
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Scope</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This policy applies to the purchase of our digital e-book, which is delivered as a
                downloadable PDF immediately after payment.
              </p>
  
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Instant Delivery &amp; Final Sale
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Because the e-book is a digital file that becomes accessible right after checkout,
                <span className="font-semibold"> all sales are final</span> once your payment is
                processed and the download link is provided.
              </p>
  
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Refund Eligibility</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                <li>The PDF file is <span className="font-semibold">corrupted or incomplete</span> and cannot be opened.</li>
                <li>You were <span className="font-semibold">charged in error</span> or experienced a duplicate transaction.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                To request a refund in these cases, you must contact us within{" "}
                <span className="font-semibold">7 days of purchase</span> and include your order ID
                along with a description or screenshot of the issue.
              </p>
  
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Request Process</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                <li>
                  Email{" "}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=services@ownlinestore.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">services@ownlinestore.com</a>{" "}
                  with the subject line “Refund Request – eBook.”
                </li>
                <li>Our support team will review and respond within <span className="font-semibold">48 hours</span>.</li>
                <li>Approved refunds will be credited to your original payment method within <span className="font-semibold">5–7 business days</span>.</li>
              </ul>
  
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Need Help?</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have trouble downloading or accessing the PDF, please reach out to{" "}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=services@ownlinestore.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">services@ownlinestore.com</a>{" "}
                and we’ll gladly assist.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
  