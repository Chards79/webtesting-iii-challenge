// Test away!
import React from 'react'
import { render } from 'react-testing-library';

import Display from './Display';

test('Mocking example', () => {
    const mock = jest.fn();
    mock('smile');
    expect(mock).toHaveBeenCalled();
})