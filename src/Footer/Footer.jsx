import { NavLink } from 'react-router'

function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-10 border-t border-gray-200 bg-gray-50 text-gray-600">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-gray-900">Store</p>
          <p className="mt-3 max-w-sm text-sm leading-6">
            Everyday finds, made easy to shop. Browse what you love and keep
            everything you need in one place.
          </p>
        </div>

        <div className="sm:justify-self-end">
          <h2 className="text-sm font-semibold text-gray-900">Explore</h2>
          <nav aria-label="Footer navigation" className="mt-3 flex gap-6 text-sm">
            <NavLink to="/" className="hover:text-indigo-700">
              Home
            </NavLink>
            <NavLink to="/cart" className="hover:text-indigo-700">
              Cart
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 text-center text-xs sm:px-6">
        © {new Date().getFullYear()} Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
