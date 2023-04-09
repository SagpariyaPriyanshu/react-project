import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function AdminPanel() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="55px"
        height="100vh"
      >
        <Link
          to="/AdminPanel/ButtonCompo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card sx={{ minWidth: 275, minHeight: 275, marginRight: 10 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Button
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/AdminPanel/CheckboxCompo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card sx={{ minWidth: 275, minHeight: 275, marginRight: 10 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Checkbox
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/AdminPanel/User"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card sx={{ minWidth: 275, minHeight: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                User
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
    </>
  );
}
