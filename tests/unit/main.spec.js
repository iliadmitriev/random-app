import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe('App', ()=>{
  const wrapper = mount(App)

  it('should render the whole application', function () {
    expect(wrapper.html()).toContain(`Добавить рандом`)
  });
})
