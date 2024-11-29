import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve saved cart or fallback to empty array
    setCart(savedCart); // Update the state with the retrieved cart data
  }, []); // Runs only once when the component mounts


  return (
    <div>
      <div class="container padding-bottom-3x mb-1">
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
                cart.map((product, index) => (
                  <tr key={index}>
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
                      <div className="count-input">
                      <div className="count-input d-flex align-items-center justify-content-center">
          <button
            className="btn btn-sm btn-outline-secondary"
           
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button className="btn btn-sm btn-outline-secondary" >
            +
          </button>
        </div>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium">
                      {product.price}
                    </td>
                    
                    <td className="text-center">
                      <a
                        className="remove-from-cart"
                        href="#"
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

        {/* <!-- Shopping Cart Totals--> */}
        <div class="shopping-cart-footer">
          <div class="column">
            <form class="coupon-form" method="post">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Coupon code"
                required=""
              />
              <button class="btn btn-outline-primary btn-sm" type="submit">
                Apply Coupon
              </button>
            </form>
          </div>
          <div class="column text-lg">
            Subtotal: <span class="text-medium">$289.68</span>
          </div>
        </div>
        <div class="shopping-cart-footer">
          <div class="column">
            <a class="btn btn-outline-secondary" href="#">
              <i class="icon-arrow-left"></i>&nbsp;Back to Shopping
            </a>
          </div>
          <div class="column">
            <a
              class="btn btn-primary"
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
            <a class="btn btn-success" href="#">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
