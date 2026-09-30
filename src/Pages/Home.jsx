import { useOutletContext } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import headphonesImage from "../assets/headphones.jpg";
import { items } from "../productlist.jsx";




function Home() {
  const { selectedIds, addToCart, removeFromCart } = useOutletContext();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            image={headphonesImage}
            name={item.name}
            price={item.price}
            quantity={selectedIds.filter((id) => id === item.id).length}
            addToCart={() => addToCart(item.id)}
            removeFromCart={() => removeFromCart(item.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
