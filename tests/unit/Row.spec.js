
import Row from '@element/Row';
import { shallowMount } from '@vue/test-utils';
import { isIterable } from 'core-js';

describe('Row.vue', () => {
  let wrapper;
  let rowEle;
  beforeEach(() => {
    wrapper = shallowMount(Row);
    rowEle = wrapper.vm.$el;
  });
  it('crate', () => {
    expect(rowEle.classList).toContain('el-row');
  });

  it('gutter', () => {
    wrapper.setProps({ gutter: 20 });
    expect(rowEle.style.marginLeft).toBe('-10px');
    expect(rowEle.style.marginRight).toBe('-10px');
  });

  it('type', () => {
    wrapper.setProps({ type: 'flex' });
    expect(rowEle.classList).toContain('el-row--flex');
  });

  it('justify', () => {
    wrapper.setProps({ justify: 'end' });
    expect(rowEle.classList).toContain('is-justify-end');
  });

  it('align', () => {
    wrapper.setProps({ align: 'bottom' });
    expect(rowEle.classList).toContain('is-align-bottom');
  });
});
