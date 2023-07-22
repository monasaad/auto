import { Link } from "react-router-dom";

function Cart() {
    return (
        <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img id="orderimg" src="./img/nocart.svg" width="400px" />
            <h1 style={{ fontWeight: 'normal', }}>سلتك  فارغة</h1>
            <Link to="/">
                <button style={{ width: '170px', height: '40px', padding: '10px', fontSize: '12px' }}>العودة للصفحة الرئيسية</button>
            </Link>
        </div>
    );
}
export default Cart;