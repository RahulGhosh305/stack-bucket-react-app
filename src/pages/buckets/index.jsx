import { Helmet } from "react-helmet";

// Import Assets Files
import Navbar from '../../components/nav/nav.jsx';
import Create from '../../components/create/create.jsx';
import Table from '../../components/table/table.jsx';



function BucketPage () {
    return <div>
        <Helmet>
            <title>Bucket Page</title>
        </Helmet>

        {/* Navigation Bar */}
        <Navbar />

        {/* Main content */}
        <main className='container __margin--ylg'>
            
            {/* Add New Bucket Section */}
            <Create label='Create New Bucket'/>

            {/* Buckets List Table */}
            <div className='section table __shadow--sm'>

            {/* Table Component */}
            <Table />
            </div>
        </main>
    </div>
}
export default BucketPage;