export { default as BottomNavbar } from '../../components/Bottom-Navbar.vue'
export { default as ChatList } from '../../components/Chat-List.vue'
export { default as ChatMessages } from '../../components/Chat-Messages.vue'
export { default as ChateMessageInput } from '../../components/Chate-Message-Input.vue'
export { default as ChateReply } from '../../components/Chate-Reply.vue'
export { default as Contacts } from '../../components/Contacts.vue'
export { default as HeaderPrivateChat } from '../../components/Header-Private-Chat.vue'
export { default as Header } from '../../components/Header.vue'
export { default as ModalBlock } from '../../components/Modal-Block.vue'
export { default as NewPart } from '../../components/New-Part.vue'
export { default as SideBar } from '../../components/SideBar.vue'
export { default as Stories } from '../../components/Stories.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
