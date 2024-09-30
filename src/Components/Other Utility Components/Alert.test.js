 ;
import {  render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers for better assertions
import Alert from './Alert'; // Adjust the import path as needed

describe('Alert Component', () => {
  
  test('does not render when alert prop is null or undefined', () => {
    // Render the component with alert as null
    const { container } = render(<Alert alert={null} />);
    
    // Ensure nothing is rendered
    expect(container.firstChild).toBeNull();
    
    // Render the component with alert as undefined
    const { container: container2 } = render(<Alert alert={undefined} />);
    
    // Ensure nothing is rendered
    expect(container2.firstChild).toBeNull();
  });

  test('renders success alert with correct message and class', () => {
    // Mock the alert prop with type success
    const alertProps = {
      type: 'success',
      message: 'Operation successful!'
    };

    // Render the component with the mock props
    render(<Alert alert={alertProps} />);

    // Assert that the message is displayed
    expect(screen.getByText('Operation successful!')).toBeInTheDocument();

    // Assert that the success class is applied
    expect(screen.getByRole('alert')).toHaveClass('alert-success');
  });

  test('renders danger alert with correct message and class', () => {
    // Mock the alert prop with type danger
    const alertProps = {
      type: 'danger',
      message: 'Something went wrong!'
    };

    // Render the component with the mock props
    render(<Alert alert={alertProps} />);

    // Assert that the message is displayed
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();

    // Assert that the danger class is applied
    expect(screen.getByRole('alert')).toHaveClass('alert-danger');
  });
});
