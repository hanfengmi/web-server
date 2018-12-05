import express from 'express';
const router = express.Router();
import { find } from './find';


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('route /api/user reques Time: ', Date.now());
  next()
});

// route: /api/test 查询user表全部数据 
router.get('/', find);

export default router