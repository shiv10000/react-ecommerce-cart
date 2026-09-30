import { NavLink } from 'react-router'

const linkClassName = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-indigo-100 text-indigo-700'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  }`

function Header({ cartCount = 0 }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          Store
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink to="/"  className={linkClassName}>
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={(state) => `${linkClassName(state)} relative`}
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
          >
            Cart
            {cartCount > 0 && (
              <span aria-hidden="true" className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
