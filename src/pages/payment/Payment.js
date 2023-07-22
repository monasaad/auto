import Data from './payment.json';

function Payment() {
    return (
        <div class="container" style={{ overflowX: 'scroll', margin: '50px 0px', height: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <p>   حسابات الشركة المعتمدة لدى البنوك والمصارف السعودية باسم
                <b>
                    "شركة إمدادات المركبة للتجارة"</b></p>
            <table style={{ width: '100px' }}>
                <thead>
                    <tr>
                        <th>اسم البنك/المصرف</th>
                        <th>رقم الحساب</th>
                        <th>رقم الايبان</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.method.map((result) => (
                        <tr>
                            <td>{result.bank}</td>
                            <td>{result.acc}</td>
                            <td>{result.iban}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p style={{ color: 'red' }}>بعد الانتهاء من الطلب الرجاء تحويل المبلغ المطلوب لتجهيز طلبك</p>
        </div>
    );
}
export default Payment;