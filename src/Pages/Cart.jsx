import { useOutletContext } from 'react-router'
import { items } from '../productlist.jsx'

function Cart() {
  const { selectedIds, addToCart, removeFromCart } = useOutletContext()
  const cartItems = items
    .filter((item) => selectedIds.includes(item.id))
    .map((item) => ({
      ...item,
      quantity: selectedIds.filter((id) => id === item.id).length,
    }))
  const itemCount = selectedIds.length
  const total = cartItems.reduce(
    (amount, item) => amount + item.price * item.quantity,
    0,
  )
  const formatPrice = (amount) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount)
    

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Your cart</h1>
        <p className="text-sm text-gray-500">
          {itemCount} {itemCount === 1 ? 'item' : 'items'}
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-12 text-center text-gray-600">
          Your cart is empty.
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h2 className="font-medium text-gray-900">{item.name}</h2>
                  <div className="mt-2 flex w-fit items-center rounded-lg border border-gray-200" aria-label={`${item.name} quantity`}>
                    <button type="button" onClick={() => removeFromCart(item.id)} aria-label={`Remove one ${item.name}`} className="px-3 py-1 text-indigo-700 hover:bg-indigo-50">−</button>
                    <span className="min-w-6 text-center text-sm font-medium">{item.quantity}</span>
                    <button type="button" onClick={() => addToCart(item.id)} aria-label={`Add one ${item.name}`} className="px-3 py-1 text-indigo-700 hover:bg-indigo-50">+</button>
                  </div>
                </div>
                <p className="shrink-0 font-semibold text-gray-900">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-5 text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      )}
    </main>
  )
}

export default Cart
