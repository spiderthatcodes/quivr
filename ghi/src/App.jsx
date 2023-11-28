<<<<<<< ghi/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import OrderCreate from "./pages/OrderCreate.jsx";
import Cart from "./pages/Cart.jsx";
import OrderHistory from "./pages/OrderHistory.jsx";
import UserList from "./pages/UserList.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import {FooterContainer} from './components/footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-order" element={<OrderCreate />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
      <FooterContainer />
    </Router>
  );
}

export default App;
