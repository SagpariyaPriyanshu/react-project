import React from 'react'
import { useState } from 'react'
import { Typography, Box, Menu, MenuItem ,styled} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Login = styled(Box)`
// background: #FB641B;
cursor:pointer;
padding: 6px 12px 6px 12px;
`;

export default function Profile({account,setAccount}) {
    const navigate = useNavigate();
    const [open,setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const logoutUser = ()=>{
        setAccount('');
        navigate('/');
    }
    const viewProfile = ()=>{
        handleClose();
        navigate('/UserProfile');
    }
  return (
    <>
        <Login onClick={handleClick}><Typography>Welcome, {account}</Typography></Login>
        <Menu
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
        >
            <MenuItem onClick={()=>{handleClose(); viewProfile();}}>
                <AccountCircleIcon fontSize='small' sx={{marginRight:"10px"}}/>
                <Typography>Profile</Typography>
            </MenuItem>
            <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
                <LogoutIcon fontSize='small' sx={{marginRight:"10px"}}/>
                <Typography>Logout</Typography>
            </MenuItem>
        </Menu>
    </>
  )
}
