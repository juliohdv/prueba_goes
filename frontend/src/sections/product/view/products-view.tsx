import { useState, useEffect } from 'react';
import axios   from 'redaxios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {_products} from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';



// ----------------------------------------------------------------------



export function ProductsView() {
  const [productos, setProductos] = useState([]);
  const [suma, setSuma] = useState(0.00);
  const getProductos = async () => {
    await axios.get('http://127.0.0.1:8000/productos/obtener')
      .then((response) =>{
        setProductos(response.data.productos);
        const totalSuma = response.data.productos.reduce((acumulador, producto) => acumulador + producto.price, 0);
        setSuma(totalSuma)
      })
  }

useEffect(() =>{
  getProductos();
}, [])
  return (
    <DashboardContent>

      <Typography variant="h4" sx={{ mb: 5 }}>
        Productos
      </Typography>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap-reverse',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          sx={{
            my: 1,
            gap: 1,
            flexShrink: 0,
            display: 'flex',
          }}
        />
          
        
      </Box>

      <Grid container spacing={3}>
          <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}}>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Precio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productos.map((item) => (
                  <TableRow>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>${item.price}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell/>
                  <TableCell>Total: ${suma}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      </Grid>

      
    </DashboardContent>
  );
}
