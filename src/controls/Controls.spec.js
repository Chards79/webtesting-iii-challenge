// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

test('it renders correctly', () => {
    render(<Controls />);
});

test('button text changes upon toggle', () => {
    const toggleLockedMock = jest.fn();
    const { getByText } = render(
        <Controls toggleLocked={toggleLockedMock} />
    );
    getByText(/lock gate/i);
});

test('button text changes upon closed', () => {
    const toggleClosedMock = jest.fn();
    const { getByText } = render(
        <Controls toggleClosed={toggleClosedMock} />
    );
    getByText(/close gate/i);
});