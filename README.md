# Software Engineer Quiz
This is a single-page application with a quiz for Software Engineers.  When the page opens, 20 questions will be generated.  The user must then answer the questions and hit the submit button at the bottom of the page to see their score.  The user will then have the chance to view the answers to the quiz and generate a new quiz.

While studying at General Assembly, I created this bonus project by myself to learn TypeScript with the other technologies taught in the course.

Due to the fact that I did not use a bundler (I created this Express app from scratch) the use of the dotenv library becomes quite complex with TypeScript.  After speaking with a couple of my instructors, it was determined that this project could be run with the set up below.

# Setup
Navigate to the website https://quizapi.io/ and generate your own API key.  In the terminal, before running the server, enter the command 'export QUIZ_API_KEY=[YOUR API KEY]'.  Then, start the server as usual.

# Screenshot

<img src="imgs/quiz-app-front-page.png">
<img src="imgs/quiz-app-solutions.png">

# Technologies Used

- TypeScript
- JavaScript
- RESTful API
- Express
- Node
- MongoDB/Mongoose
- EJS
- HTML
- CSS

# Next Steps

- Find and fix possible bugs
- Refactor code
- Recreate project using a bundler so that users do not need to generate their own
- Modify the answers to be more readable