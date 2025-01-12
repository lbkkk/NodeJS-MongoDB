import {body, validationResult } from 'express-validator'
import {
  studentsRepository
} from '../repositories/index.js'


async function getAllStudents(req, res) {
  res.status(200).json({
    message: 'GET all students successfully',
    data: [
      {
        id: 1,
        name: 'Nguyen Van A',
        age: 20,
        address: 'New York'
      },
      {
        id: 2,
        name: 'Nguyen Van B',
        age: 22,
        address: 'Los Angeles'
      }
    ]
  })
  // res.status(500).json({
  //   message: 'GET all students failed',
  //   data: []
  // })
}

async function getDetailStudentById(req, res) {
  res.send('GET detail student by id: ' + req?.params?.id ?? "")
}

async function updateStudent(req, res) {
  res.send('POST insert students')
}

async function insertStudent(req, res) {
  res.send('PUT update students')
}

export default {
  getAllStudents,
  getDetailStudentById,
  updateStudent,
  insertStudent
}