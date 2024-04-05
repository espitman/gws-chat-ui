export default function ({ app }, inject) {
  const getToken = () => {
    return localStorage.getItem('token')
  }

  const setToken = (token) => {
    return localStorage.setItem('token', token)
  }

  const login = async (name, password) => {
    try {
      const {
        data: {
          payload: { user },
        },
      } = await app.$api.post(`/user-service/login`, { name, password })
      setToken(user.id)
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

  const user = {
    login,
    isAuthenticated,
    checkAuth,
    checkNotAuth,
  }
  inject('user', user)
}
