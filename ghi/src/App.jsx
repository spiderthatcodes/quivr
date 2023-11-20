import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import OrderCreate from './pages/OrderCreate.jsx';
import Cart from './pages/Cart.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import OrderDetails from './pages/OrderDetails.jsx';
import UserList from './pages/UserList.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Landing />}
                />
                <Route
                    path='/create-order'
                    element={<OrderCreate />}
                />
                <Route
                    path='/cart'
                    element={<Cart />}
                />
                <Route
                    path='/order-history'
                    element={<OrderHistory />}
                />
                <Route
                    path='/order-details'
                    element={<OrderDetails />}
                />
                <Route
                    path='/users'
                    element={<UserList />}
                />
            </Routes>
        </Router>
    );
}

export default App;
