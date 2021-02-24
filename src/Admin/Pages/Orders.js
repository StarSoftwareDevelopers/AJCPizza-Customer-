import OrderTable from './../AdminComponents/Table/OrdersTable';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Orders = () => {
    return ( 
        <Container maxWidth = "lg" style={{
            margin: "1rem"
        }}>
                 <OrderTable/>
    </Container>
     );
}
 
export default Orders;