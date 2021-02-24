import React from 'react';
import MUIDataTable from "mui-datatables";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';


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
    ["1", "2/24/2020", "2/25/2020", "12345","Aelin Galathynius","₱130.00","Pending","₱130.00",<Button variant="outlined" color="primary">
    View
  </Button>],
    ["John Walsh", "Test Corp", "Hartford", "CT","Active", 
    <Select
    native
    value={state.age}
    onChange={handleChange}
    inputProps={{
      name: 'age',
      id: 'age-native-simple',
    }}
  >
    <option aria-label="None" value="" />
    <option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option>
  </Select> ],
    ["Bob Herm", "Test Corp", "Tampa", "FL","Active"],
    ["James Houston", "Test Corp", "Dallas", "TX","Active"],
    ];

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