import { mount } from 'vue-test-utils'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import HelloWorld from '@/components/HelloWorld'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('should render correct contents', () => {
    const header = wrapper.find('h1'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(header.text()).to.have.string('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
