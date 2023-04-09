import express from 'express';

import { userSignup, userLogin, get_user, delete_userById,get_userByUsername,put_userByUsername } from '../controller/user-controller.js';
import { get_btncompo, post_btncompo,delete_btncompoById } from '../controller/btnCompo-controller.js';
import { get_checkboxcompo,post_checkboxcompo,delete_checkboxcompoById } from '../controller/checkboxCompo-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin); 
router.post('/buttonComponents', post_btncompo);
router.get('/buttonComponents', get_btncompo);
router.delete('/buttonComponents/:id', delete_btncompoById);
router.post('/checkboxComponents', post_checkboxcompo);
router.get('/checkboxComponents', get_checkboxcompo);
router.delete('/checkboxComponents/:id', delete_checkboxcompoById);
router.get('/user', get_user);
router.delete('/user/:id', delete_userById);
router.get('/user/:username', get_userByUsername);
router.put('/user/:username', put_userByUsername);

export default router;