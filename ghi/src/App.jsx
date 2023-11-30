import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing.jsx';
import OrderCreate from './pages/OrderCreate/OrderCreate.jsx';
import OrderHistory from './pages/OrderHistory/OrderHistory.jsx';
import UserList from './pages/UserList/UserList.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { FooterContainer } from './components/Footer/Footer.jsx';
import Login from './pages/Login/Login.jsx';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={<Landing />}
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
                <Route
                    path='/create-order'
                    element={<OrderCreate />}
                />
                <Route
                    path='/order-history'
                    element={<OrderHistory />}
                />
                <Route
                    path='/users'
                    element={<UserList />}
                />
            </Routes>
            <FooterContainer />
        </Router>
    );
}

export default App;
