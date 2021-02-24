import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Dashboard from './../AdminComponents/Dashboard';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
    return ( 
      <div>
          <Container maxWidth = "lg" style={{
              margin: "1rem"
          }}>
            <ThemeProvider theme={theme}>
                <Typography variant="h4" style={{
                    textAlign: "left",
                    marginTop: "-20px",
                    marginBottom: "1rem"
                    }}>Overview</Typography>
                    <Dashboard/>
            </ThemeProvider>
      </Container>
      </div>
      
     );
}
 
export default Home;
