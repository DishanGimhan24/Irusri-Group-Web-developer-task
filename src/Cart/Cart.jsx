import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve saved cart or fallback to empty array
    setCart(savedCart); // Update the state with the retrieved cart data
  }, []); // Runs only once when the component mounts

  const handleQuantityChange = (id, change) => {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: product.quantity + change > 0 ? product.quantity + change : 1, // Update quantity, ensure it's >= 1
          }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to local storage
  };

  const handleRemoveFromCart = (idToRemove) => {
    const updatedCart = cart.filter((product) => product.id !== idToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to local storage
  };

  return (
    <div>
      <div className="container padding-bottom-3x mb-1">
        <div className="table-responsive shopping-cart">
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
                <th className="text-center">
                  <a className="btn btn-sm btn-outline-danger" href="#">
                    Clear Cart
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="product-item">
                        <a className="product-thumb" href="#">
                          <img src={product.image} alt="Product" />
                        </a>
                        <div className="product-info">
                          <h4 className="product-title">
                            <a href="#">{product.name}</a>
                          </h4>
                          <span>
                            <em>Size:</em> {product.size || "N/A"}
                          </span>
                          <span>
                            <em>Color:</em> {product.color || "N/A"}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="count-input d-flex align-items-center justify-content-center">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleQuantityChange(product.id, -1)} // Decrease quantity for specific product
                          disabled={product.quantity === 1} // Disable if quantity is 1
                        >
                          -
                        </button>
                        <span className="mx-2">{product.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleQuantityChange(product.id, 1)} // Increase quantity for specific product
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium">
                      ${(product.price * product.quantity || 0).toFixed(2)} {/* Calculate subtotal */}
                    </td>
                    <td className="text-center">
                      <a
                        className="remove-from-cart"
                        href="#"
                        onClick={() => handleRemoveFromCart(product.id)} // Remove item
                        data-toggle="tooltip"
                        title="Remove item"
                      >
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    Your cart is empty!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Shopping Cart Totals */}
        <div className="shopping-cart-footer">
          <div className="column">
            <form className="coupon-form" method="post">
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Coupon code"
                required=""
              />
              <button className="btn btn-outline-primary btn-sm" type="submit">
                Apply Coupon
              </button>
            </form>
          </div>
          <div className="column text-lg">
            Subtotal: <span className="text-medium">$289.68</span>
          </div>
        </div>
        <div className="shopping-cart-footer">
          <div className="column">
            <a className="btn btn-outline-secondary" href="#">
              <i className="icon-arrow-left"></i>&nbsp;Back to Shopping
            </a>
          </div>
          <div className="column">
            <a
              className="btn btn-primary"
              href="#"
              data-toast=""
              data-toast-type="success"
              data-toast-position="topRight"
              data-toast-icon="icon-circle-check"
              data-toast-title="Your cart"
              data-toast-message="is updated successfully!"
            >
              Update Cart
            </a>
            <a className="btn btn-success" href="#">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;