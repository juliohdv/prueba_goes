import { useState, useEffect } from 'react';
import axios   from 'redaxios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';


import type { IPostItem } from '../post-item';
import { TextField, List, ListItem, Checkbox, Select, MenuItem } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  posts: IPostItem[];
};

export function TaskView({ posts }: Props) {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [filtro, setFiltro] = useState("0")


  const crearTarea = async (t, d) => {
    await axios.post('http://127.0.0.1:8000/tareas/crear',{
      'title' : t,
      'description' : d,
      'status': false
    })
    .then((response) => {
      if(response.data.success){
        getTareas()
      }
    })
  }
  const getTareas = async () => {
    await axios.get('http://127.0.0.1:8000/tareas/obtener')
      .then((response) =>{
        setTareas(response.data.tareas);
        setTitulo("")
        setDescripcion("")
      })
  }

  const filtrarTareas = async (filtro) => {
    await axios.post('http://127.0.0.1:8000/tareas/filtrar',{
      filtro,
    })
    .then((response) =>{
        setTareas(response.data.tareas);
        setTitulo("")
        setDescripcion("")
      })
  }

  const actualizarTarea = async (id, status) => {
    await axios.post('http://127.0.0.1:8000/tareas/actualizar',{
      id, 
      'status': status
    })
    .then((response) =>{
      if(response.data.success){
        setTareas([])
        getTareas()
      }
    })
  }
useEffect(() =>{
  getTareas();
}, [])
  return (
    <DashboardContent>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Tareas
        </Typography>
      </Box>

      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
      </Box>

      <Grid container spacing={3}>
        <Grid size={3}>
          <TextField
            value={titulo}
            onChange={(e)=>{setTitulo(e.target.value)}}
            variant='outlined'
            label="Ingresa un titulo"
           />
        </Grid>
        <Grid size={3}>
          <TextField
            value={descripcion}
            onChange={(e)=>{setDescripcion(e.target.value)}}
            variant='outlined'
            label="Ingresa una descrpción"
           />
        </Grid>
        <Grid size={3}>
          <Button 
            size='large'
            variant='contained'
            onClick={()=>{crearTarea(titulo,descripcion)}}
          >
            Agregar
          </Button>
        </Grid>
        <Grid size={12}>
            <Select
              label="Filtro"
              value={filtro}
              onChange={(e)=>{setFiltro(e.target.value);filtrarTareas(e.target.value)}}
            >
              <MenuItem value="0" selected>Todas</MenuItem>
              <MenuItem value="1">Finalizadas</MenuItem>
              <MenuItem value="2">Pendientes</MenuItem>
            </Select>
        </Grid>
        <Grid size={12}>
          <List>
            {tareas.map((tarea) => (
                <>
                  <ListItem>
                    <Checkbox checked={tarea.status} onClick={(e)=>{actualizarTarea(tarea.id,e.target.checked)}}/>
                    <Typography key={tarea.id}>{tarea.title} - {tarea.description}</Typography>
                  </ListItem>
                </>
              
            ))}
          </List>
        </Grid>
      </Grid>

    </DashboardContent>
  );
}
