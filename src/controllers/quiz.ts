/*---------- Modules ----------*/
import express from 'express';
import axios from 'axios';


/*---------- API ----------*/
const apiKey = process.env.QUIZ_API_KEY;
const apiURL = `https://quizapi.io/api/v1/questions?${apiKey}`;


/*---------- Get API Data ----------*/
export const showQuiz = (req: express.Request, res: express.Response) => {
    axios.get(apiURL, {
        headers: {
          'x-api-key': apiKey
        }
      })
      .then(response => {
        return response;
      })
      .then(response => {
        res.render("index", {
            data: response.data
        });
      })
      .catch(err => {
        console.log("Error:", err);
      });
}
