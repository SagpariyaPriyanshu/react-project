import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const URL = "http://localhost:8000";

export default function UserProfile() {
  const { account, setAccount } = useContext(DataContext);

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpdate = () => { 
    axios
      .put(`${URL}/user/${account}`, user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${URL}/user/${account}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [account]);

  return (
    <Container sx={{ mt: 10 }} maxWidth="md">
      <Typography variant="h5" sx={{ mb: 2 }}>
        User Profile
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        Here Username and Email can not be change 
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={user.username}
            margin="normal"
            variant="outlined"
            InputProps={{
                readOnly: true,
              }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={user.email}
            margin="normal"
            variant="outlined"
            InputProps={{
                readOnly: true,
              }}
          />
        <TextField
          fullWidth
          label="First Name"
          name="firstname"
          value={user.firstname}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastname"
          value={user.lastname}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
    </Container>
  );
}
