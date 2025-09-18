export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                For all enquiries related to orders, products, refunds, or support, please reach out to our team directly by email. We aim to respond to every message as quickly as possible and typically within 24–48 business hours. Include your order ID (if available) and a brief description of your query so we can assist you faster.
              </p>
              <p className="mt-4 text-lg font-semibold text-gray-900">
                Email: <a href="mailto:services@ownlinestore.com" className="text-purple-600 underline">services@ownlinestore.com</a>
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Tip: Check your spam or promotions folder if you don’t see our reply. For urgent matters, reply to our last email thread so the context stays intact.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


