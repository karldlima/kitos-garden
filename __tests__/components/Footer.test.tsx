import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer } from '@/components';

jest.mock('next/router', () => {
  const pushMock = jest.fn();
  const mockRouter = {
    pathname: '/',
    push: pushMock,
  };
  return {
    useRouter: jest.fn().mockReturnValue(mockRouter),
  };
});

describe('Footer', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.resetMocks();
  });
  afterEach(cleanup);

  it('renders successfully', () => {
    const { container } = render(<Footer data-testid="test-footer" />);
    expect(container).toBeInTheDocument();
  });
  it('contains the correct url for Posts link', () => {
    const { getByText } = render(<Footer />);

    const postsLink = getByText('Posts');

    expect(postsLink).toHaveAttribute('href', '/posts');
  });
  it('contains the correct url for icon', async () => {
    const { getByAltText } = render(<Footer />);

    const imageElement = getByAltText('kitos garden icon');
    const anchorElement = imageElement.closest('a');

    expect(anchorElement).toHaveAttribute('href', '/');
  });

  it('is focusable with tab', async () => {
    const { getByText } = render(<Footer />);

    const ProjectsLink = getByText('Projects');

    expect(ProjectsLink).not.toHaveFocus();
    for (let i = 0; i < 4; i++) {
      await userEvent.tab();
    }
    expect(ProjectsLink).toHaveFocus();
  });
});
