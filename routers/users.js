import express from 'express'
import {body, validationResult } from 'express-validator'
import { 
  userController 
} from '../controllers/index.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('GET users')
})
router.post('/login', 
  body('email').isEmail(),
  body('password').isLength({min: 6}),
    userController.login
)

router.post('/register',
    userController.register
)

export default router