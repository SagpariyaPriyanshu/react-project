import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {  Table,  TableBody,  TableCell,  TableHead,  TableRow,  Button,  Dialog,  DialogTitle,  DialogContent,  DialogContentText,  DialogActions} from "@mui/material";
import Pagination from '@mui/material/Pagination';


const URL = "http://localhost:8000";
export default function AdminUser() {
  const [users, setUsers] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(users.length / rowsPerPage);

  const handleDeleteItem = async (id) => {
    setDeleteDialogOpen(true);
    setDeleteUserId(id);
  };
  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setDeleteUserId(null);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios(`${URL}/user`);
      setUsers(result.data);
    };
    fetchUsers();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const start = (page - 1) * rowsPerPage;
  const end = page * rowsPerPage;

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(`${URL}/user/${deleteUserId}`);
      const updatedUsers = users.filter(
        (user) => user._id !== response.data._id
      );
      setUsers(updatedUsers);
      setDeleteDialogOpen(false);
      setDeleteUserId(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ paddingTop: "55px" }}>
      <div className="container mt-4">
      <Table sx={{ minWidth: 650 ,backgroundColor: 'rgba(205, 205, 255, 0.12)'}}>
        <TableHead sx={{ backgroundColor: 'rgba(2, 0, 255, 0.12)' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>No</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Password</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.slice(start, end).map((user, index) => (
            <TableRow key={user._id} sx={{ '&:hover': { backgroundColor: 'rgba(155, 154, 255, 0.12)' } }}>
              <TableCell>{start + index + 1}</TableCell>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: 'red', color: 'white' }}
                  onClick={() => handleDeleteItem(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination count={totalPages} page={page} onChange={handleChangePage} />
        <Dialog
          open={deleteDialogOpen}
          onClose={handleDeleteCancel}
        >
          <DialogTitle>Delete User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this user?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel}>Cancel</Button>
            <Button onClick={handleDeleteUser} sx={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}