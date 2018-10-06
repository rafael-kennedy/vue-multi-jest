const subject = require(`./layout.vue`).default
const { mount } = require(`vue-test-utils`)

describe(`scaffolds out page`, () => {
  const wrapper = mount(subject)

  test(`has all components`, () => {
    ;[`main`, `aside`, `header`, `footer`].forEach(tag => {
      expect(wrapper.contains(tag)).toBeTruthy()
    })
  })
  test(`snapshot`, () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
