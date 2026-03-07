import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Personal Shopper</h3>
          <p className="text-neutral-400">Your beauty expert, tailored to your needs</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><Link href="/Main" className="hover:text-white">All Products</Link></li>
            <li><Link href="/Main#products" className="hover:text-white">Featured</Link></li>
            <li><Link href="/Main" className="hover:text-white">New Arrivals</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/Main" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/Main" className="hover:text-white">Shipping</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Account</h4>
          <ul className="space-y-2 text-neutral-400">
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
            <li><Link href="/register" className="hover:text-white">Sign Up</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
        <p>&copy; 2024 Personal Shopper. All rights reserved.</p>
      </div>
    </footer>
  )
}
