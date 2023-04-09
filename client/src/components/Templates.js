import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box
} from "@mui/material";

export default function Templates() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop="55px"
      height="100vh"
    >
      
        <Card sx={{ backgroundColor: "#ffffffc0", width: "320px",marginRight: 10  }}>
          <CardMedia
            component="img"
            height="350"
            image="./sample/login.png"
            alt="login"
          />
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Login Form
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              HTML + CSS
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              component={Link}
              to="/GetLogin"
              variant="contained"
              sx={{ backgroundColor: "#00008b", color: "white",marginBottom:"10px" }}
            >
              Custom
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ backgroundColor: "#ffffffc0", width: "320px" }}>
          <CardMedia
            component="img"
            height="350"
            image="./sample/register.png"
            alt="register"
          />
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Register Form
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              HTML + CSS
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              component={Link}
              to="/GetRegister"
              variant="contained"
              sx={{ backgroundColor: "#00008b", color: "white",marginBottom:"10px" }}
            >
              Custom
            </Button>
          </CardActions>
        </Card>
    </Box>
  );
}
