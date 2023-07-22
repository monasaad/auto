import { Link } from "react-router-dom";

function Order() {
    return (
        <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img id="orderimg" src="./img/noorders.svg" width="450px" />
            <h1 style={{ fontWeight: 'normal', }}>لايوجد لديك طلبات سابقة</h1>
            <Link to="/">
                <button style={{ width: '170px', height: '40px', padding: '10px', fontSize: '12px' }}>العودة للصفحة الرئيسية</button>
            </Link>
        </div>
    );
}
export default Order;