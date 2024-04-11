import { render } from '@testing-library/react';
import { Button } from '@/components';

describe('Button', () => {
  it('renders successfully', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });

  // disabled is not clickable

  // onClick executes a console log function

  // accessible: focusable ?
});
