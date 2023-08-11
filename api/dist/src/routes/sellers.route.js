"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sellers_controller_1 = __importDefault(require("../controllers/sellers.controller"));
const router = express_1.default.Router();
/* GET programming languages. */
router.get('/', sellers_controller_1.default.get);
/* POST programming language */
// router.post('/', programmingLanguagesController.create)
/* PUT programming language */
// router.put('/:id', programmingLanguagesController.update)
/* DELETE programming language */
// router.delete('/:id', programmingLanguagesController.remove)
exports.default = router;
