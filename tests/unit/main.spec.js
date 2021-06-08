import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe('App', ()=>{
  const wrapper = mount(App)

  it('should render the whole application', function () {
    expect(wrapper.html()).toContain(`Добавить рандом`)
  })

 it('should create li element when push random button', done => {
   const button = wrapper.find('#btnRandom')
   const list = wrapper.find('#listRandom')
   button.trigger('click').then(()=>{
     expect(list.element.childElementCount).toEqual(1)
     done()
   })
 })

})
