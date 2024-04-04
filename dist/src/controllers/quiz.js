"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showQuiz = void 0;
const axios_1 = __importDefault(require("axios"));
/*---------- API ----------*/
const apiKey = process.env.QUIZ_API_KEY;
const apiURL = `https://quizapi.io/api/v1/questions?${apiKey}`;
/*---------- Get API Data ----------*/
const showQuiz = (req, res) => {
    axios_1.default.get(apiURL, {
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
};
exports.showQuiz = showQuiz;
//# sourceMappingURL=quiz.js.map