import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components';

afterEach(cleanup);

describe('Button', () => {
  it('renders successfully', () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });

  it('executes action when clicked', async () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={onClick} data-testid="test-button">
        Click Me
      </Button>,
    );
    const button = getByTestId('test-button');

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('is not clickable when disabled is true', async () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={onClick} disabled data-testid="test-button">
        Click Me
      </Button>,
    );
    const button = getByTestId('test-button');

    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('is focusable with tab', async () => {
    const { getByTestId } = render(
      <Button data-testid="test-button">Click Me</Button>,
    );
    const button = getByTestId('test-button');

    expect(button).not.toHaveFocus();
    await userEvent.tab();
    expect(button).toHaveFocus();
  });
});
