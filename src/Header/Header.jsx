import React, { useState, useContext, useEffect } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../Authantications/authSlice";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";
import { WishlistContext } from "../Context/WishlistContext";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { wishlistCount, setWishlistCount } = useContext(WishlistContext);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleSignOut = () => {
    // Dispatch logout action
    dispatch(logout());
    // Clear localStorage (optional)
    localStorage.removeItem("authToken");
    // Navigate to login page
    navigate("/login");
  };

  useEffect(() => {
    const savedCartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
    setCartCount(savedCartCount);
  }, []);

  const getWishlistItems = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return storedWishlist;
  };

  useEffect(() => {
    const items = getWishlistItems();
    setWishlistItems(items);
  }, []);

  const removeFromWishlist = (productId) => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const updatedWishlist = storedWishlist.filter((item) => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));


    setWishlistItems(updatedWishlist);  // Update the UI immediately
    window.location.reload();
  
  };

  return (
    <div>
      <header className="header">
        <div className="top_bar">
          <div className="container" id="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"
                      alt=""
                    />
                  </div>
                  +94 76 3412 162
                </div>
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png"
                      alt=""
                    />
                  </div>
                  <a href="mailto:fastsales@gmail.com">kdgimhan@gmail.com</a>
                </div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_menu"></div>
                  <div className="top_bar_user">
                    <div className="user_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <a href="/register">Register</a>
                    </div>
                    <div>
                      <a href="#" onClick={handleSignOut}>
                        Sign Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header_main">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo">
                    <a href="#">Dish</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                  <div className="header_search_content">
                    <div className="header_search_form_container">
                      <form action="#" className="header_search_form clearfix">
                        <input
                          type="search"
                          required="required"
                          className="header_search_input"
                          placeholder="Search for products..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="header_search_button trans_300"
                          value="Submit"
                        >
                          <img
                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"
                            alt=""
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                        alt=""
                      />
                    </div>
                    <div className="wishlist_content dropdown">
                      <div className="wishlist_text">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          id="wishlistDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Wishlist
                        </a>
                        <div className="wishlist_count">{wishlistCount}</div>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="wishlistDropdown"
                        >
                          {wishlistItems.length > 0 ? (
                            wishlistItems.map((item) => (
                              <li key={item.id}>
                                <a className="dropdown-item" href="#">
                                <DeleteOutlineIcon onClick={() => removeFromWishlist(item.id)}/> {item.name}
                                </a>
                              </li>
                            ))
                          ) : (
                            <li>
                              <a className="dropdown-item" href="#">
                                No items in wishlist
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="cart">
                    <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                      <div className="cart_icon">
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                          alt=""
                        />
                        <div className="cart_count">
                          <span>{cartCount}</span>
                        </div>
                      </div>
                      <div className="cart_content">
                        <div className="cart_text">
                          <a href="/cart">Cart</a>
                        </div>
                        <div className="cart_price">$185</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
