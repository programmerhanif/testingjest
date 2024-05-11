import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from '@/components/LoginForm/LoginForm';

describe('LoginForm', () => {
  test('submits form with entered username and password', async () => {
    // Mock function to check if form submission function is called
    const mockSubmitFunction = jest.fn();

    render(<LoginForm onSubmit={mockSubmitFunction} />);

    // Get input fields
    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    // Get submit button and simulate form submission
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // Log all calls made to mockSubmitFunction
    console.log('Mock Submit Function Calls:', mockSubmitFunction.mock.calls);

    // Assert that form submission function is called with correct data
    expect(mockSubmitFunction).toHaveBeenCalledWith({
      username: 'testUser',
      password: 'testPassword',
    });
  });
});
