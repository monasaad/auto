
import Navs from './Nav.js';
function Nav() {
    function show_hide() {
        var click = document.getElementById("side");
        var main = document.getElementById("main");
        var btn = document.getElementById("btn");
        var img = document.getElementById("img");
        // var text = document.getElementById("text");
        // var sidetxt = document.getElementById("sidetxt");
        // var sidetxt1 = document.getElementById("sidetxt1");

        if (click.style.width === "20vw") {
            //when hidden
            main.style.width = "100vw";
            click.style.width = "0vw";
            btn.style.right = "1vw";
            img.src = "./img/left-arrow.svg";
            // text.innerHTML = "إظهار";
            // sidetxt.style.display = "none";
            // sidetxt1.style.display = "none";
        } else {
            //when open
            main.style.width = "100vw";
            click.style.width = "20vw";
            btn.style.right = "15vw";
            img.src = "./img/right-arrow.svg";
            // text.innerHTML = "إخفاء";
            // sidetxt.style.display = "inline";
            // sidetxt1.style.display = "inline";
        }
    }

    return (
        <div id="side" style={{
            backgroundColor: '#3B49E7', width: '20vw', height: '100vh', borderRadius: '50px 0 0 0', boxShadow: '-4px 0px 20px 3px rgba(59, 73, 231, 0.23)', color: 'white',

        }}>
            <button id="btn" onClick={show_hide} style={{
                position: 'absolute', right: '15vw', top: "5vh",
                width: '30px', height: '30px', padding: '7px'
            }}>
                <img id="img" src="./img/right-arrow.svg" width="15px" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly', height: '90vh', marginTop: '10px' }}>
                <img id="logo" style={{ marginTop: '50px' }} src='./img/logo.png' width='100px' />
                <nav>
                    {/* <Navs to="/home" img='./img/home.svg' para="الصفحة الرئيسية" id="sidetxt" />
                    <Navs to="/order" img='./img/order.svg' para="الطلبات" id="sidetxt1" /> */}
                    <Navs to="/" img='./img/home.svg' para="الصفحة الرئيسية" />
                    <Navs to="/order" img='./img/order.svg' para="الطلبات" />
                    <Navs to="/address" img='./img/pin.svg' para="العناوين" />
                    <Navs to="/payment" img='./img/wallet.svg' para="طرق الدفع" />
                    <Navs to="/cart" img='./img/shopping-cart.svg' para="السلة" />
                    <Navs to="/language" img='./img/worlwide.svg' para="تغيير اللغة" />
                    <Navs to="/logout" img='./img/exit.svg' para="تسجيل الخروج" />
                </nav>
                <footer>جميع الحقوق محفوظة
                    <span class="break">
                        © 2021 Auto</span>
                </footer>


            </div>
        </div>
    );
}

export default Nav;


