export default function ({ app }, inject) {
  const getToken = () => {
    return localStorage.getItem('token')
  }

  const setToken = (token) => {
    return localStorage.setItem('token', token)
  }

  const getUserID = () => {
    return localStorage.getItem('userID')
  }

  const setUserID = (userID) => {
    return localStorage.setItem('userID', userID)
  }

  const deleteToken = (token) => {
    return localStorage.removeItem('token')
  }

  const login = async (name, password) => {
    try {
      const {
        data: {
          payload: { user },
        },
      } = await app.$api.post(`/user-service/login`, { name, password })
      setToken(user.token)
      setUserID(user.id)
      app.$event.init()
      await app.router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const isAuthenticated = () => {
    return !!getToken()
  }

  const checkAuth = () => {
    if (!isAuthenticated()) {
      app.router.push('/login')
    } else {
      const token = getToken()
      app.$api.setHeader('Authorization', token)
    }
  }

  const checkNotAuth = () => {
    if (isAuthenticated()) {
      app.router.push('/')
    }
  }

  const logout = () => {
    deleteToken()
    app.$api.setHeader('Authorization', '')
    app.router.push('/login')
  }

  const user = {
    getToken,
    getUserID,
    login,
    isAuthenticated,
    checkAuth,
    checkNotAuth,
    logout,
  }
  inject('user', user)
}
