import { Instagram } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 shadow-md">
        <div className="container mx-auto px-6 flex items-center gap-3">
          <Instagram className="w-8 h-8 text-purple-600" />
          <span className="text-2xl font-bold tracking-wide">
            <span className="text-purple-600">Own</span>LineStore
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              About <span className="text-purple-600">OwnlineStore</span>
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              OwnlineStore is an Indian e-commerce brand dedicated to making online shopping
              simple, trustworthy, and delightful. We curate quality products across electronics,
              fashion, and lifestyle to bring everyday convenience and value to your doorstep.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We started OwnlineStore with a clear belief: shopping online should feel as reliable as
              buying from a trusted neighborhood store. That means clear information, fair pricing,
              secure payments, fast shipping, and a responsive support team you can count on.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to remove the guesswork from online purchases. Whether you’re upgrading
              your gadgets, refreshing your wardrobe, or improving your home setup, we focus on
              quality, transparency, and support—so you can buy with confidence.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-purple-100">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-purple-600">OwnlineStore</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
