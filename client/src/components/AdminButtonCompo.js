import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Card, CardContent, Container, Grid, Typography, alpha, TextField} from '@mui/material';

const URL = 'http://localhost:8000';

export default function AdminButtonCompo()  {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${URL}/buttonComponents`);
      setItems(result.data);
    };
    fetchItems();
  }, []);

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.delete(`${URL}/buttonComponents/${id}`);
      const updatedItems = items.filter((item) => item._id !== response.data._id);
      setItems(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  const [btnCompo, setbtnCompo] = useState('');
  
  const postbtnvalue = async () => {
    try {
      await axios.post(`${URL}/buttonComponents`, { btnCompo });
      setbtnCompo('');
      const result = await axios(`${URL}/buttonComponents`);
      setItems(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  const onValueChange = (e) => {
    setbtnCompo(e.target.value);
  };
return (
  <div style={{ paddingTop: '55px',height:'100%'  }}>
    <Container maxWidth="lg" sx={{marginTop:"25px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            sx={{
              margin: 'auto',
              flex: '0 0 calc(32vw - (2.7em * 2))',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
              backgroundColor: alpha('#ffffff', 0.9),
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Add HTML+CSS for Button Component
              </Typography>
              <TextField
                id="checkbox-compo-input"
                label="Button Component"
                value={btnCompo}
                onChange={onValueChange}
                multiline
                rows={3}
                fullWidth
                placeholder="Type something…"
              />
              <Button sx={{
                marginTop:'5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
               
              }}variant="contained" onClick={postbtnvalue}>
                Add
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid container spacing={3} sx={{ height: '55vh', overflowY: 'scroll',marginTop: "10px",marginLeft:"0px",marginBottom:"0px",marginRight:"0px"}}>
        {items.map((item) => (
          <Grid item key={item._id} xs={12} sm={6} md={3} lg={2.38}>
            <Card
              sx={{
                margin: 'auto',
                flex: '0 0 calc(32vw - (2.7em * 2))',
                height: '160px',
                minWidth: "200px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'relative',
                backgroundColor: alpha('#ffffff', 0.9),
              }}
            >
              <CardContent>
                <Typography gutterBottom dangerouslySetInnerHTML={{ __html: item.btnCompo }} />
              </CardContent>
                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '0px'}}>
                  <Button sx={{ fontSize: 10}} onClick={() => handleDeleteItem(item._id)}>Delete</Button>
                </Container>
            </Card>
          </Grid>
        ))}
        </Grid>
      </Grid>
    </Container>
  </div>
);
}
