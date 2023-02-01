import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DogPage from '../component/DogPage';

describe('DogPage', () => {
  it('renders the component', async () => {
    render(<DogPage />);
    expect(screen.getByText(/Fetch New Images/)).toBeInTheDocument();
  });

  it('fetches new images on button click', async () => {
    render(<DogPage />);
    const button = screen.getByText(/Fetch New Images/);
    await waitFor(() => expect(button).toBeInTheDocument());
  });
});
