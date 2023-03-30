import express from 'express';

import { userSignup, userLogin } from '../controller/user-controller.js';
import { get_btncompo, post_btncompo,delete_btncompo } from '../controller/btnCompo-controller.js';
import { get_checkboxcompo,post_checkboxcompo,delete_checkboxcompo } from '../controller/checkboxCompo-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin); 
router.post('/buttonComponents', post_btncompo);
router.get('/buttonComponents', get_btncompo);
router.delete('/buttonComponents/:id', delete_btncompo);
router.post('/checkboxComponents', post_checkboxcompo);
router.get('/checkboxComponents', get_checkboxcompo);
router.delete('/checkboxComponents/:id', delete_checkboxcompo);

export default router;