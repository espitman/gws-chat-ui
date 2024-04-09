export default function ({ app }, inject) {
  const getToken = () => {
    return localStorage.getItem('token')
  }

  const setToken = (token) => {
    return localStorage.setItem('token', token)
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
      await app.router.push('/contacts')
    } catch (err) {
      console.log(err)
      alert(err.response.data.message)
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
      app.router.push('/contacts')
    }
  }

  const logout = () => {
    deleteToken()
    app.$api.setHeader('Authorization', '')
    app.router.push('/login')
  }

  const user = {
    getToken,
    login,
    isAuthenticated,
    checkAuth,
    checkNotAuth,
    logout,
  }
  inject('user', user)
}
