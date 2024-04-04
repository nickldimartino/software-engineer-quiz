"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_1 = require("../controllers/quiz");
/*---------- Routes ----------*/
exports.default = (router) => {
    // get the main page and call the showQuiz function
    router.get('/', quiz_1.showQuiz);
};
//# sourceMappingURL=quiz.js.map