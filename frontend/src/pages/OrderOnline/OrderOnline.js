import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './OrderOnline.css';

const menuItems = [
  // Keep your existing menu items array
  // ... (your existing menu items data)
  {
    id: 1,
    name: 'Green Detox',
    description: 'Kale, spinach, apple, lemon, and ginger',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
  },
  {
    id: 2,
    name: 'Citrus Boost',
    description: 'Orange, lemon, and ginger for a zesty kick',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
  },
  {
    id: 3,
    name: 'Berry Blast',
    description: 'Strawberries, blueberries, and a hint of mint',
    price: 7.25,
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37789ca5',
  },
  {
    id: 4,
    name: 'Tropical Sunrise',
    description: 'Mango, pineapple, orange, and passion fruit blend',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1603561589923-6b8d4c434b93',
  },
  {
    id: 5,
    name: 'Protein Power',
    description: 'Banana, peanut butter, almond milk, and chia seeds',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b',
  },
  {
    id: 6,
    name: 'Immunity Booster',
    description: 'Carrot, orange, turmeric, and ginger',
    price: 7.75,
    image: 'https://images.unsplash.com/photo-1603561589923-6b8d4c434b93',
  },
];

function OrderOnline() {
  // Keep all your existing state and functions
  // ... (your existing state and methods)
  const [cart, setCart] = useState([]);
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [shippingDetails, setShippingDetails] = useState({
      name: '',
      address: '',
      city: '',
      zip: '',
      contactNumber: '',
    });

    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    
    

    const addToCart = (item) => {
      setCart([...cart, item]);
    };
  
    const removeFromCart = (itemId) => {
      setCart(cart.filter((item) => item.id !== itemId));
    };
  
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };
  
    const handleCheckout = () => {
      setShowCheckoutModal(true);
    };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      console.error('Stripe.js has not loaded yet');
      setProcessing(false);
      return;
    }

    try {
      const amount = parseFloat(calculateTotal());
      const customerDetails = {
        name: shippingDetails.name,
        address: shippingDetails.address,
        city: shippingDetails.city,
        zip: shippingDetails.zip,
        contactNumber: shippingDetails.contactNumber,
      };

      const cartItems = cart.map((item) => ({
        name: item.name,
        price: item.price,
       // quantity: 1, // Add quantity if applicable
      }));

      console.log('Sending request to backend:', { amount, customerDetails }); // Log the request
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, customerDetails, cartItems }),
      });

      const { clientSecret } = await response.json();
      console.log('Received client secret:', clientSecret); // Log the client secret

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: shippingDetails.name,
            address: {
              line1: shippingDetails.address,
              city: shippingDetails.city,
              postal_code: shippingDetails.zip,
            },
            phone: shippingDetails.contactNumber,
          },
        },
      });

      if (error) throw error;
      console.log('Payment successful!'); // Log success
      alert('Payment successful! Order placed!');
      setCart([]);
      setShowCheckoutModal(false);
    } catch (error) {
      console.error('Payment failed:', error); // Log errors
      alert(`Payment failed: ${error.message}`);
    } finally {
      setProcessing(false);
    }
  };

  // Keep your existing return JSX
  // ... (your existing return statement)
  return (
      <div className="order-online-container">
        <h1>Order Online</h1>
        <div className="order-content">
          {/* Menu Section */}
          <div className="menu-section">
            <h2>Our Fresh Menu</h2>
            <div className="menu-grid">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <div
                    className="item-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="price">${item.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-button"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Cart Section */}
          <div className="cart-section">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty.</p>
                <p>Add some delicious juices!</p>
              </div>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="cart-total">
              <h3>Total: ${calculateTotal()}</h3>
              <button
                className="checkout-button"
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
  
        {/* Checkout Modal */}
        {showCheckoutModal && (
          <div className="checkout-modal-overlay">
            <div className="checkout-modal">
              <h2>Checkout</h2>
              <form onSubmit={handleSubmitOrder}>
                {/* Shipping Details */}
                <div className="form-section">
                  <h3>Shipping Details</h3>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={shippingDetails.name}
                      onChange={(e) =>
                        setShippingDetails({ ...shippingDetails, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      value={shippingDetails.address}
                      onChange={(e) =>
                        setShippingDetails({ ...shippingDetails, address: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      value={shippingDetails.city}
                      onChange={(e) =>
                        setShippingDetails({ ...shippingDetails, city: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      value={shippingDetails.zip}
                      onChange={(e) =>
                        setShippingDetails({ ...shippingDetails, zip: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="text"
                      value={shippingDetails.contactNumber}
                      onChange={(e) =>
                        setShippingDetails({ ...shippingDetails, contactNumber: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
  
                {/* Payment Details */}
                <div className="form-section">
                  <h3>Payment Details</h3>
                  <div className="form-group">
                    <label>Card Details</label>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                          invalid: {
                            color: '#9e2146',
                          },
                        },
                      }}
                    />
                  </div>
                </div>
  
                {/* Submit and Cancel Buttons */}
                <div className="form-actions">
                  <button type="submit" className="submit-order-button" disabled={!stripe || processing}>
                    {processing ? 'Processing...' : 'Place Order'}
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setShowCheckoutModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
}

export default OrderOnline;