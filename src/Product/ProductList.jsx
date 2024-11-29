import React, {useState} from 'react';
import './ProductList.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductList = () => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const products = [
        { id: 1, name: "Monior", price: "20.00", description: "This is a great product that has many features and benefits for users. It is known for its durability and superior quality. People love this product because it provides excellent value for money and it is very reliable over time.", image: "https://i0.wp.com/www.winsoft.lk/wp-content/uploads/2023/06/monova-18.5-monitor.png?fit=486%2C486&ssl=1" },
        { id: 2, name: "Laptop", price: "35.00", description: "Another amazing product with fantastic quality, suitable for a wide range of applications. This product stands out for its excellent craftsmanship and user-friendly design.", image: "https://i0.wp.com/www.winsoft.lk/wp-content/uploads/2023/10/ASUS-Vivobook-X1504V-Core-i5-13th-Gen-Laptop.png?fit=518%2C518&ssl=1" },
        { id: 3, name: "Gaming Chair", price: "50.00", description: "High-quality product that meets all standards. It is specifically designed for people who need something that can handle heavy-duty tasks without compromising on style.", image: "https://www.gamestreet.lk/images/products/5958.jpg" },
        { id: 4, name: "RAM", price: "45.00", description: "An excellent choice for any occasion, crafted with care using the finest materials. This product is both practical and aesthetically pleasing, making it perfect for everyday use.", image: "https://www.gamestreet.lk/images/products/5985.jpg" },
        { id: 5, name: "Mouse", price: "30.00", description: "Perfect for daily use, very reliable and practical. It has received rave reviews from customers who appreciate its affordability without compromising on quality.", image: "https://www.gamestreet.lk/images/products/4401.jpg" },
        { id: 6, name: "Elgato Ring Light", price: "25.00", description: "Reliable and durable product for everyday tasks. Whether you need it for work or leisure, this product is designed to make your life easier and more efficient.", image: "https://www.gamestreet.lk/images/products/3925.jpg" },
        { id: 7, name: " Mechanical Gaming Keyboard", price: "40.00", description: "The best in its class, offering great value. With its unique features and superior performance, this product is a top choice for those seeking reliability and excellence.", image: "https://www.gamestreet.lk/images/products/5069.jpg" },
        { id: 8, name: "AMD Ryzen 7", price: "55.00", description: "A premium choice for you with exquisite features. This product offers outstanding quality and performance, making it the perfect choice for those who value the finer things in life.", image:"https://www.gamestreet.lk/images/products/3785.jpg" },
    ];

    const addToCart = (product) => {
        // Retrieve the cart from localStorage or default to an empty array if not found
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      
        // Check if the product is already in the cart
        const existingProduct = storedCart.find((item) => item.id === product.id);
      
        if (existingProduct) {
          // If the product is already in the cart, show an alert
          alert(`${product.name} is already in the cart!`);
        } else {
          // If the product is not in the cart, add it to the cart
          const newCart = [...storedCart, product];
      
          // Update the state and save the new cart to localStorage
          setCart(newCart);
          localStorage.setItem('cart', JSON.stringify(newCart));
      
          alert(`${product.name} added to cart!`);
        }
      };
      ;

    
    
    return (
        <div>
            <section style={{ backgroundColor: '#eee' }}>
                <div className="py-5">
                    <div className="row justify-content-center mb-3">
                        {products.map(product => (
                            <div key={product.id} className="col-md-12 col-xl-10">
                                <div className="card shadow-0 border rounded-3 mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                    <img
                                                        src={product.image}
                                                        className="w-100"
                                                        alt={product.name}
                                                    />
                                                    <a href="#!">
                                                        <div className="hover-overlay">
                                                            <div
                                                                className="mask"
                                                                style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}
                                                            ></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-6 pt-md-5 pb-5">
                                                {/* Product Name with larger font size */}
                                                <h5 style={{ fontSize: '1.75rem', fontWeight: 'bold',}}>
                                                    {product.name}
                                                </h5>

                                                {/* Product Description with larger font size and padding */}
                                                <div className="mt-1 mb-0" style={{ fontSize: '1.125rem', padding: '10px 0' }}>
                                                    {product.description}
                                                </div>

                                            </div>
                                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start p-xl-5">
                                                <div className="d-flex flex-row align-items-center mb-1">
                                                    <h2 className="mb-1 me-1">${product.price}</h2>
                                                    <span className="text-danger">
                                                        <s>$20.99</s>
                                                    </span>
                                                </div>
                                                <h6 className="text-success">Free shipping</h6>
                                                <div className="d-flex flex-column mt-4">
                                                    <button onClick={()=> addToCart(product)}
                                                        data-mdb-button-init
                                                        data-mdb-ripple-init
                                                        className="btn btn-primary btn-lg"
                                                        type="button"
                                                    ><AddShoppingCartIcon/>
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          
        </div>
    );
};

export default ProductList;
