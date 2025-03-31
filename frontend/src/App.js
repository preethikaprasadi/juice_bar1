import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Locations from './pages/Locations/Locations';
import Directions from './pages/Directions/Directions';
import Contact from './pages/Contact/Contact';
import OrderOnline from './pages/OrderOnline/OrderOnline';
import OrdersPage from './pages/OrdersPage/OrdersPage'; // Import the new OrdersPage

const stripePromise = loadStripe('pk_test_51QvJLWE8XjFGswOmzsuH1S6p5yHbsFNYlM9gnCqiFRNPn6njgXoEuKZ5f35dL0BcnaV865cMnNDk7tupKJ4KDNN200qNI4AYx2');

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/directions/:locationId" element={<Directions />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/orderonline" 
          element={
            <Elements stripe={stripePromise}>
              <OrderOnline />
            </Elements>
          } 
        />
        <Route path="/orders" element={<OrdersPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;