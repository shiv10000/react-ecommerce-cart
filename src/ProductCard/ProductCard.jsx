function ProductCard({ image, name, price, quantity, addToCart, removeFromCart }) {
  return (
    <article className={`flex w-full max-w-64 flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md ${quantity > 0 ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-gray-200'}`}>
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-base font-bold text-gray-900">{price}</p>
        {quantity > 0 ? (
          <div className="mt-3 flex items-center justify-between rounded-lg border border-indigo-200" aria-label={`${name} quantity`}>
            <button type="button" onClick={removeFromCart} aria-label={`Remove one ${name}`} className="px-4 py-2 text-indigo-700 hover:bg-indigo-50">−</button>
            <span className="text-sm font-semibold text-gray-900">{quantity}</span>
            <button type="button" onClick={addToCart} aria-label={`Add one ${name}`} className="px-4 py-2 text-indigo-700 hover:bg-indigo-50">+</button>
          </div>
        ) : (
          <button
            type="button"
            onClick={addToCart}
            className="mt-3 w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to cart
          </button>
        )}
      </div>
    </article>
  )
}

export default ProductCard
