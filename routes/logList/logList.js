import express from 'express';
const router = express.Router();
import { account } from './account';


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('route /api/login reques Time: ', Date.now());
  next()
});

// route: /api/login 登录 
router.post('/account', account);

export default router