import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@/components/Forms/Input';

afterEach(cleanup);

describe('Input', () => {
  it('renders successfully', () => {
    const { container } = render(<Input />);
    expect(container).toBeInTheDocument();
  });

  it('contains text that is entered by user', async () => {
    const { getByTestId } = render(<Input data-testid="test-input" />);
    const input = getByTestId('test-input');

    await userEvent.type(input, 'John');

    expect((input as HTMLInputElement).value).toBe('John');
  });

  it('is not clickable when disabled is true', async () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Input data-testid="test-input" />);
    const input = getByTestId('test-input');

    await userEvent.click(input);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('is focusable with tab', async () => {
    const { getByTestId } = render(<Input data-testid="test-input" />);
    const input = getByTestId('test-input');

    expect(input).not.toHaveFocus();
    await userEvent.tab();
    expect(input).toHaveFocus();
  });
});
