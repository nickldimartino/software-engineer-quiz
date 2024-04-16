# <h1 align="center">Software Engineer Quiz</h1>

<div align="center">
 <a href="https://www.linkedin.com/in/nicholas-dimartino/" target="_blank">
      <img src="https://img.shields.io/badge/-linkedin.com/in/nicholasdimartino-blue?style=flat&logo=Linkedin&logoColor=white">
 </a> 
 <a href="mailto:nick.l.dimartino@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/-nick.l.dimartino@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white">
 </a>
</div>

## 📝 Description
This is a single-page application with a quiz for Software Engineers.  When the page opens, 20 questions will be generated.  The user must then answer the questions and hit the submit button at the bottom of the page to see their score.  The user will then have the chance to view the answers to the quiz and generate a new quiz.

While studying at General Assembly, I created this bonus project by myself to learn TypeScript with the other technologies taught in the course.

Due to the fact that I did not use a bundler (I created this Express app from scratch) the use of the dotenv library becomes quite complex with TypeScript.  After speaking with a couple of my instructors, it was determined that this project could be run with the set up below.

## 🖼️ Screenshots

<details>
 <summary> 📊 The Quiz</summary>
 
 | Description | Screenshot |
 |------------ | ------------|
 | <h3 align="center">Top of the Page</h3> | <img src="imgs/quiz-app-front-page.png" width="500">
 | <h3 align="center">Finished Quiz</h3> | <img src="imgs/quiz-app-solutions.png" width="500">
 
</details>

# Technologies Used
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![Node](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TS-NODE](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)

## ⚛️ Getting Started
### 📲 Instructions
<details>
<summary>API Setup</summary>

1. Navigate to the website https://quizapi.io/ and generate your own API key.
 
2. In the terminal, before running the server, enter the command 'export QUIZ_API_KEY=[YOUR API KEY]'.
 
3. Then, start the server as usual.
</details>
<details>
<summary>Taking the quiz</summary>

1. The API will generate 20 questions.
 
2. Answer each question by clicking one of the boxes.
 
3. Submit the quiz at the end the see your scores and the answers.

4. Select "New Quiz" to take another quiz.
</details>

# ⏭️ Next Steps

- [ ] Find and fix possible bugs
- [ ] Refactor code
- [ ] Recreate project using a bundler so that users do not need to generate their own API key
- [ ] Modify the answers to be more readable