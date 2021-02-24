import React from 'react';
import MUIDataTable from "mui-datatables";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import {Select,MenuItem} from '@material-ui/core';


const OrderTable = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    const columns = ["No.", "Order Date", "Delivery Date", "Order ID","Customer Name","Order Amount","Payment Status","Payment Amount","View Details","Order Status"];

    const data = [
    ["1", "2/24/2020", "2/25/2020", "12345","Aelin Galathynius","₱130.00","Pending","₱130.00",
    <Button variant="outlined" color="primary">
        View
    </Button>,
     <Select>
       <MenuItem value={1}>Completed</MenuItem>
       <MenuItem value={2}>Preparing</MenuItem>
       <MenuItem value={3}>On the Way</MenuItem>
       <MenuItem value={4}>On the Way(Delivered)</MenuItem>
       <MenuItem value={5}>Completed</MenuItem>
     </Select>
  ], 
["2", "2/24/2020", "2/25/2020", "12346","Rowan Whitethorn","₱130.00","Pending","₱130.00",
<Button variant="outlined" color="primary">
    View
</Button>,
 <Select>
       <MenuItem value={1}>Completed</MenuItem>
       <MenuItem value={2}>Preparing</MenuItem>
       <MenuItem value={3}>On the Way</MenuItem>
       <MenuItem value={4}>On the Way(Delivered)</MenuItem>
       <MenuItem value={5}>Completed</MenuItem>
</Select>

],];

    const options = {
    filterType: 'checkbox',
    };

    return (
        <div>
            <Container maxWidth="lg">
                <MUIDataTable
                title={"Orders"}
                data={data}
                columns={columns}
                options={options}
                />

            </Container>
        </div>
    );
}
 
export default OrderTable;