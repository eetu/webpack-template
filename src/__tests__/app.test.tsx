import { shallow } from 'enzyme';
import * as React from 'react';

import App from '../components/app';

test('Component should render', async () => {
  const wrapper = shallow(<App />);

  expect(wrapper.exists()).toEqual(true);
});
