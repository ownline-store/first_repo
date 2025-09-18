export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy explains how OwnlineStore ("we", "us", "our") collects, uses, discloses, and safeguards your personal data when you visit our website and purchase our products.
              We comply with applicable Indian laws, including the Information Technology Act, 2000 and rules thereunder, and follow privacy best practices.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">Data We Collect</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Identity data: name, email, phone, billing/shipping addresses.</li>
              <li>Order and payment data: items purchased, transaction IDs, limited payment details handled via secure payment gateways.</li>
              <li>Technical data: IP address, device, browser, and analytics (cookies and similar technologies).</li>
              <li>Communication data: messages and support interactions.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">How We Use Your Data</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Process and deliver orders, provide invoices, and manage returns/refunds.</li>
              <li>Provide customer support and respond to queries.</li>
              <li>Improve our website, product selection, and user experience.</li>
              <li>Send service-related emails (order updates, security notices). Marketing emails only with consent and opt‑out.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies for essential site functions, analytics, and to remember preferences. You can manage cookies in your browser; disabling some may affect functionality.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement administrative, technical, and physical safeguards. Payments are processed by PCI‑DSS compliant gateways. Data is shared only with trusted service providers under confidentiality.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-2">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You may request access, correction, update, or deletion of your personal data, and withdraw marketing consent. Contact: <a href="mailto:services@ownlinestore.com" className="text-purple-600 underline">services@ownlinestore.com</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


