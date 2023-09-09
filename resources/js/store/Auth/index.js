// store/auth.js
import { defineStore } from 'pinia'
import { getUserData } from "@/auth/utils"

const user = getUserData()
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('jwtToken'),
    currentUser: user,
  }),
  actions: {
    setAuth(data) {
      this.isAuthenticated = true

      return localStorage.setItem('jwtToken', data)
    },
    setUser(user) {
      return localStorage.setItem('user', JSON.stringify(user))
    },
    logout() {
      localStorage.removeItem('jwtToken')
      localStorage.removeItem('user')
      this.isAuthenticated = false
      this.currentUser = false
    },
  },
})
