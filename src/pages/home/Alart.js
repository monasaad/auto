import { ExternalLink } from 'react-external-link';

function Alart() {
    return (
        <div style={{ backgroundColor: '#FFF6A8', borderRadius: '10px', padding: '1px', textAlign: 'center', border: '1px solid #F2E355' }}>
            <p class="small">
                مرحبا بك شريكنا في أوتو! إذا كانت هذه أول زيارة ننصح بشدة مشاهدة المقطع التوضيحي على هذا الرابط
                <span><ExternalLink href="https://www.youtube.com/watch?v=kz6EELTR2fk"><span style={{ marginRight: '5px' }}>انقر هنا</span></ExternalLink></span>
            </p>
        </div>
    );
}
export default Alart;