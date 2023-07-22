import { ExternalLink } from 'react-external-link';
import Alart from './Alart.js';
import Filter from './Filter.js';
import Table from './Table.js';

function Home() {

    return (

        <div style={{ padding: '20px' }}>
            <Alart />
            <Filter />
            <Table />
        </div>
    );
}

export default Home;