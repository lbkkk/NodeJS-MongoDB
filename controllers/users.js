import {
  body, 
  validationResult
} from 'express-validator'

import {
  usersRepository
} from '../repositories/index.js'

import { EventEmitter } from 'events'
const myEvent = new EventEmitter()
// listen
myEvent.on('event.register.user', (params) => {
  console.log(`They talked about: ${JSON.stringify(params)}`)
})

const login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }
  const { email, password } = req.body
  // call repository function
  await usersRepository.login({ email, password })  

  res.status(200).json({
    message: 'Login user successfully',
    data: 'detail user here ...'
  })
}

const register = async (req, res) => {
  // destructuring
  const {
    email, 
    password,
    name,
    phoneNumber
  } = req.body
  await usersRepository.register({
    name, 
    email, 
    password, 
    phoneNumber
  })

  // Event Emitter
  myEvent.emit('event.register.user', {name, email, phoneNumber})
  res.status(201).json({
    message: 'Register users successfully'
  })
}

const getDetailUser = async (req, res) => {
  res.send('GET detail user by id: ' + req?.params?.id ?? "") 
}

// many other functions

export default {
  login,
  register,
  getDetailUser
}