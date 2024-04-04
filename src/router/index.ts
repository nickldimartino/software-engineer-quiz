/*---------- Modules ----------*/
import express from 'express';
import quiz from './quiz';


/*---------- Router ----------*/
const router = express.Router();


/*---------- Routes ----------*/
export default (): express.Router => {
  // call the quiz router 
  quiz(router);

  return router;
};
