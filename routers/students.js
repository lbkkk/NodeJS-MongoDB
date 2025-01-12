import express from 'express'
import { 
  studentController 
} from '../controllers/index.js'

const router = express.Router()

router.get('/', 
  studentController.getAllStudents
)

// get students by id
router.get('/:id', 
  studentController.getDetailStudentById
)

// post = insert
router.post('/insert', 
  studentController.insertStudent
)

// update = put or patch (put là tìm đối tượng đó và update còn patch là ko tìm thấy thì sẽ tạo mới)
router.put('/:id', 
  studentController.updateStudent
)
router.patch('/:id', 
  studentController.updateStudent
)

export default router