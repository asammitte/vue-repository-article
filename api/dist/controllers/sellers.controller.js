"use strict";
// const programmingLanguages = require('../services/programmingLanguages.service');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function get(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // res.json(await programmingLanguages.getMultiple(req.query.page));
            res.json("it's alive");
        }
        catch (err) {
            console.error(`Error while getting sellers`);
            next(err);
        }
    });
}
// async function create(req, res, next) {
//   try {
//     res.json(await programmingLanguages.create(req.body));
//   } catch (err) {
//     console.error(`Error while creating programming language`, err.message);
//     next(err);
//   }
// }
// async function update(req, res, next) {
//   try {
//     res.json(await programmingLanguages.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating programming language`, err.message);
//     next(err);
//   }
// }
// async function remove(req, res, next) {
//   try {
//     res.json(await programmingLanguages.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting programming language`, err.message);
//     next(err);
//   }
// }
exports.default = {
    get,
    // create,
    // update,
    // remove
};
