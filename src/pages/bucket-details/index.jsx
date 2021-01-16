import Navbar from '../../components/nav/nav.jsx';
// Import Assets
import Create from '../../components/create/create.jsx';
import Table from '../../components/table/table.jsx';

import deleteIcon from '../../assets/icons/delete-icon.png';


function BucketDetailsPage () {
    return <div>
        {/* Navigation Bar Component*/}
        <Navbar />
    
        {/* Main Content Body */}
        <main className='container __margin--ylg'>

            {/* Create new Item Component */}
            <Create label='Add New Item' extra/>

            {/* Item Table */}
            <section className='section table __shadow--sm'>
                <Table />
            </section>

            {/* Item Table Completed */}
            <section className='section table table--success __shadow--sm'>
                {/* Table Component */}
                <Table /> 
            </section>
        </main>
    </div>
}
export default BucketDetailsPage;