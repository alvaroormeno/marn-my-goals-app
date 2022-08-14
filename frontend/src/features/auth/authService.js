// authservices is only for making http request, sending data back, setting data in local storage
import axios from 'axios'

// to complete url here with http local host 5001 we added proxy
const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  //Get response from server and save it in respinse const variable. axios.post uses two params, the url where we want to send data and then de data we want to send
  const response = await axios.post(API_URL, userData)

  // Check if we have response data. When using axios it places the data insice an object called data.
  if(response.data) {
    // Set item to local storage with setItem as a property (key: value). The first argument is the key and second argument is the value wich is response.data which includes our token. Use pass response.data through json.stringify becayse we have to use strings in local storage.
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout
}

export default authService