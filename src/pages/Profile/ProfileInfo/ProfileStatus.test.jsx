import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileSntatus component', () => {
  test('status should be in the state', () => {
    const component = create(<ProfileStatus status='abc' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('abc');
  });
});
