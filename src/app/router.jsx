import { Router, Redirect } from "@reach/router";

// Custom component
import BucketPage from '../pages/buckets';
import BucketDetailsPage from '../pages/bucket-details';
import NotFound from '../pages/404-page';

function AppRouter() {
    return (
        <Router>
            <BucketPage path='/' />
            <Redirect from='buckets' to='/' noThrow />
            <BucketDetailsPage path='buckets/:bucketID' />
            <NotFound default />
        </Router>  
    )
}
export default AppRouter;