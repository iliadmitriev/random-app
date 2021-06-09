import {shallowMount} from "@vue/test-utils";
import ProgressBar from "../../src/components/progress";


describe('Progress', () => {
  it('progress bar less than 0%', () => {
    const wrapper = shallowMount(ProgressBar, {
      propsData: {
        max: 50,
        val: -1
      }
    })

    expect(wrapper.vm.progress).toStrictEqual({width: '0%'})
  })
})
