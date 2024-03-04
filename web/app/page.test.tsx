import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';
import { fetchData } from '@/shared/helpers';

// Mock the fetchData function
jest.mock('@/shared/helpers', () => ({
  fetchData: jest.fn(),
}));

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Payment Interface')).toBeInTheDocument();
  });

  it('fetches and displays a list of friends', async () => {
    // Mock the API call
    fetchData.mockResolvedValue([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ]);

    render(<Home />);

    // Wait for the fetchData to be called and state to update
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith('/friends/');
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });
});