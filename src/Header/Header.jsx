import React, { useContext } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../Authantications/authSlice";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../SearchContext";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  console.log("Search Term:", searchTerm);


  const handleSignOut = () => {
    // Dispatch logout action
    dispatch(logout());
    // Clear localStorage (optional)
    localStorage.removeItem("authToken");
    // Navigate to login page
    navigate("/login");
  };
    
  return (
    <div >
        <header class="header">
        <div class="top_bar">
          <div class="container" id="container">
            <div class="row">
              <div class="col d-flex flex-row">
                <div class="top_bar_contact_item">
                  <div class="top_bar_icon">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"
                      alt=""
                    />
                  </div>
                  +94 76 3412 162
                </div>
                <div class="top_bar_contact_item">
                  <div class="top_bar_icon">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png"
                      alt=""
                    />
                  </div>
                  <a href="mailto:fastsales@gmail.com">
                    kdgimhan@gmail.com
                  </a>
                </div>
                <div class="top_bar_content ml-auto">
                  <div class="top_bar_menu">
                  </div>
                  <div class="top_bar_user">
                    <div class="user_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <a href="/register">Register</a>
                    </div>
                    <div>
                    <a href="#" onClick={handleSignOut}>Sign Out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="header_main">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-sm-3 col-3 order-1">
                <div class="logo_container">
                  <div class="logo">
                    <a href="#">Dish</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div class="header_search">
                  <div class="header_search_content">
                    <div class="header_search_form_container">
                      <form action="#" class="header_search_form clearfix">
                        <input
                          type="search"
                          required="required"
                          class="header_search_input"
                          placeholder="Search for products..."
                          value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}

                        />
                       
                        <button
                          type="submit"
                          class="header_search_button trans_300"
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

              <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div class="wishlist_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                        alt=""
                      />
                    </div>
                    <div class="wishlist_content">
                      <div class="wishlist_text">
                        <a href="#">Wishlist</a>
                      </div>
                      <div class="wishlist_count">10</div>
                    </div>
                  </div>

                  <div class="cart">
                    <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                      <div class="cart_icon">
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                          alt=""
                        />
                        <div class="cart_count">
                          <span>3</span>
                        </div>
                      </div>
                      <div class="cart_content">
                        <div class="cart_text">
                          <a href="/cart">Cart</a>
                        </div>
                        <div class="cart_price">$185</div>
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