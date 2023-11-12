// store/auth.js
import { defineStore } from 'pinia'
import { UserRepository } from "@/repositories/userRepository"

const userRepository = new UserRepository()


export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    currentUser: null,
  }),
  actions: {
    setAuth(data) {
      this.isAuthenticated = true
      localStorage.setItem('jwtToken', data)
    },

    async initialize() {
      let userData = null
      try {
        userData = await userRepository.getCurrentUser()
        if (userData) {
          this.isAuthenticated = true
          this.currentUser = userData
        } else {
          this.currentUser = null
        }
      } catch (error) {
        console.error('An error occurred:', error)
        this.currentUser = null
      }
    },

    async logout() {
      this.isAuthenticated = false
      this.currentUser = null

      return await userRepository.logoutCurrentUser()
    },
  },
})
