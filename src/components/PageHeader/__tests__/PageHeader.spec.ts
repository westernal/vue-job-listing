import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PageHeader from '../PageHeader.vue' // Adjust this path to where your component is located

describe('Header Component', () => {
  it('renders all the router links correctly', () => {
    const wrapper = mount(PageHeader)

    // Check if the router links are rendered with the correct text
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Jobs')
    expect(wrapper.text()).toContain('Add Job')
  })

  it('has correct href for each router link', () => {
    const wrapper = mount(PageHeader)

    // Check if the router links have the correct `to` prop
    const links = wrapper.findAll('a')

    expect(links[0].attributes('href')).toBe('/') // Home
    expect(links[1].attributes('href')).toBe('/about') // Jobs
    expect(links[2].attributes('href')).toBe('/about')
  })
})
