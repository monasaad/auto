import { Link } from "react-router-dom";

function Address() {
    return (
        <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img id="addressimg" src="./img/noaddress.svg" width="300px" />
            <h1 style={{ fontWeight: 'normal', }}>لايوجد لديك عناوين سابقة</h1>
            <Link to="/">
                <button style={{ width: '170px', height: '40px', padding: '10px', fontSize: '12px' }}>العودة للصفحة الرئيسية</button>
            </Link>
        </div>
    );
}
export default Address;