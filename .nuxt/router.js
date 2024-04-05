import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b671e568 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _6c5edd40 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _ba918bae = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _ae251e20 = () => interopDefault(import('../pages/chat/private/_id.vue' /* webpackChunkName: "pages/chat/private/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contacts",
    component: _b671e568,
    name: "contacts"
  }, {
    path: "/login",
    component: _6c5edd40,
    name: "login"
  }, {
    path: "/",
    component: _ba918bae,
    name: "index"
  }, {
    path: "/chat/private/:id?",
    component: _ae251e20,
    name: "chat-private-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
