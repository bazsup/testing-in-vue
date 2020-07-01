import AppHeader from '@/components/Header'
import { mount } from '@vue/test-utils'

function isVisible(wrapper) {
  const computedStyle = window.getComputedStyle(wrapper.element)
  return computedStyle.display !== 'none'
}

describe('AppHeader', () => {
  it('should not show logout button, if user is not logged in.', () => {
    const wrapper = mount(AppHeader)
    expect(isVisible(wrapper.find('button.logout-button'))).toBe(false)
  })
  
  it('show logout button, if user logged in,', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })
    
    await wrapper.vm.$nextTick()
    expect(isVisible(wrapper.find('button.logout-button'))).toBe(true)
  })
})