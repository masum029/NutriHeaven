'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🌿 NutriHeaven</h3>
            <p className="text-gray-400">Pure nutrition, better living. Premium organic & homemade products for your family.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Home</a></li>
              <li><a href="#" className="hover:text-primary transition">Products</a></li>
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition">Track Order</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get exclusive deals and wellness tips.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="px-4 py-2 bg-primary hover:bg-teal-600 transition rounded-r-lg font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2026 NutriHeaven. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-primary transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
