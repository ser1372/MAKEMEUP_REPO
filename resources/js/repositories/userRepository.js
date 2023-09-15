import axios from "axios"

export class UserRepository{
  token = this.getCurrentToken()

  getCurrentToken(){
    return localStorage.getItem('jwtToken');
  }
  async getCurrentUser() {

    try {
      const response = await axios.post('/api/auth/me', null, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      })

      return response.data
    } catch (error) {
      console.log(error)
    }
  }


  async logoutCurrentUser(){
    try {
      const response = await axios.post('/api/auth/logout', null, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      })

      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
