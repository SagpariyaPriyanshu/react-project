import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

export default function Components() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop="55px"
      height="100vh"
    >
      <Link to="/Components/buttonCompo" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ bgcolor: '#00008b', color: 'white', marginRight: 2 }}>
          Button
        </Button>
      </Link>
      <Link to="/Components/checkboxCompo" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ bgcolor: '#00008b', color: 'white' }}>
          Checkbox
        </Button>
      </Link>
    </Box>
  );
}
