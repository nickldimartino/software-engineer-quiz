/*---------- Modules ----------*/
import express from 'express';
import { showQuiz } from '../controllers/quiz';


/*---------- Routes ----------*/
export default (router: express.Router) => {
    // get the main page and call the showQuiz function
    router.get('/', showQuiz);
};
