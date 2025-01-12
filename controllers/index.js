import studentController from "./students.js";
import userController from "./users.js";
import {body, validationResult } from 'express-validator'

export { 
  studentController, 
  userController 
};