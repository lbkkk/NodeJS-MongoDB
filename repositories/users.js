const login = async ({email, password}) => {
    console.log('login with email: ', email, '+ password: ', password)
}

const register = async ({
  email, 
  password,
  name,
  phoneNumber
}) => {
  // validate "email, password, name, phoneNumber" already done
  console.log(
    'register with email: ', email, '- password: ', password, 
    '- name: ' , name, '- phoneNumber: ' , phoneNumber )
}

export default {
  login,
  register
}