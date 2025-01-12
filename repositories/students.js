const getAllStudents = async ({
  page,
  size,
  searchString
}) => {
  console.log('get all students with page: ', page, 'size: ', size, 'searchString: ', searchString)
}


// language: 'english,vietname,jp'
const insertStudent = async ({
  name,
  age,
  address,
  language
}) => {
  console.log('insert student with name: ', name, 'age: ', age, 'address: ', address)
}

export default {
  getAllStudents,
  insertStudent
}