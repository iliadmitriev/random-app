import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";
import ProgressBar from "../../src/components/progress.vue";

describe('App', ()=>{
  const wrapper = mount(App)

  it('should render the whole application', function () {
    expect(wrapper.html()).toContain(`Добавить рандом`)
    expect(wrapper.findComponent(ProgressBar).exists()).toBe(true)
  })

 it('should create li element when push random button', done => {
   const button = wrapper.find('#btnRandom')
   const list = wrapper.find('#listRandom')
   button.trigger('click').then(()=>{
     expect(list.element.childElementCount).toEqual(1)
     done()
   })
 })

  it('should be 100% progress bar', done => {
    const button = wrapper.find('#btnRandom')
    for (let i = 0; i < 10; i++) {
      button.trigger('click').then(() => {
        if (i===9) {
          done()
        }
      })
    }
  })

})
