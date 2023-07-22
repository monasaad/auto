import './App.css';
import SideNav from './components/SideNav.js';
import Home from './pages/home/Home.js';
import Alart from './pages/home/Alart.js';

import Order from './pages/order/Order.js';
import Address from './pages/address/Address.js';
import Payment from './pages/payment/Payment.js';
import Cart from './pages/cart/Cart.js';
import Language from './Language.js';
import Login from './Login.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Main() {
    return (
        <Router>
            <div style={{ display: 'flex', maxWidth: '1280px' }} >
                <SideNav />
                <div id="main" style={{ height: '100vh', overflowY: 'auto' }}>
                    {/* <Alart /> */}
                    <Switch>
                        {/* <Route exact path="/" component={Login} /> */}
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/order" component={Order} />
                        <Route exact path="/address" component={Address} />
                        <Route exact path="/payment" component={Payment} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/language" component={Language} />
                        <Route path="/logout" component={Login} />
                    </Switch>

                    <footer class="smaller">جميع الحقوق محفوظة © 2021 Auto</footer>
                    <div style={{
                        position: 'absolute', zIndex: '3', left: '20px', bottom: '30px', width: '60px', height: '60px', borderRadius: '50px', backgroundColor: '#3B49E7',
                        boxShadow: ' 0px 4px 12px -1px rgba(0, 0, 0, 0.23)'
                    }}>
                        <img src="./img/messenger.svg" width="35px" style={{ position: 'absolute', top: '12px', right: '12px' }} />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Main;
