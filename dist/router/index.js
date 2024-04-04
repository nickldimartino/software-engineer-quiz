"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*---------- Modules ----------*/
const express_1 = __importDefault(require("express"));
const quiz_1 = __importDefault(require("./quiz"));
/*---------- Router ----------*/
const router = express_1.default.Router();
/*---------- Routes ----------*/
exports.default = () => {
    // call the quiz router 
    (0, quiz_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map