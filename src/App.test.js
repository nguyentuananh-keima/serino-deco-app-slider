import { mount } from '@bayer/wsf-decoupled-vue-preset/packages/test-utils';
import App from './App.vue';
import EYLEA_COPAY_SIMULATOR from './components/EYLEA_COPAY_SIMULATOR/EYLEA_COPAY_SIMULATOR.vue';
import './services/i18n';

describe('EYLEA_COPAY_SIMULATOR', () => {
  const wrapper = mount(App);

  it('shows HelloWorld component', () => {
    expect(wrapper.findComponent(EYLEA_COPAY_SIMULATOR)).toBeTruthy();
  });
});
