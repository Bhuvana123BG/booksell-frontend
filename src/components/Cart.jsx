import CartItemCard from "./CartItemCard";

import { cartItems } from "../data/books";

const Cart = () => {


    const handleRemove = (id) => {
        alert(`Removed item ${id}`);
    };

    return (
        <div className="p-8 space-y-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">🛒 Your Cart</h1>

            {cartItems.map((item) => (
                <CartItemCard key={item.id} item={item} onRemove={handleRemove} />
            ))}

            <div className="flex justify-end mt-6">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
