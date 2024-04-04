"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showQuiz = void 0;
const dotenv = __importStar(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
// import { env, loadEnv } from '../../env';
// console.log(loadEnv);
// loadEnv();
dotenv.config();
// console.log(process.env)
/*---------- API ----------*/
// const apiKey = "2W76Bt7R6GNh0zaZ9kuyziL8nLNUq3voM0MefBS8";
const apiKey = process.env.QUIZ_API_KEY;
// console.log(process.env)
console.log(apiKey);
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