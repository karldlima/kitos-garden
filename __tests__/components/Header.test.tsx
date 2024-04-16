import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '@/components';

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

describe('Header', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.resetMocks();
  });
  afterEach(cleanup);

  it('renders successfully', () => {
    const { container } = render(<Header data-testid="test-header" />);
    expect(container).toBeInTheDocument();
  });
  it('contains the correct url for Posts link', () => {
    const { getAllByText } = render(<Header />);

    const postsLink = getAllByText('Posts');

    expect(postsLink[1]).toHaveAttribute('href', '/posts');
  });
  it('contains the correct url for icon', async () => {
    const { getByAltText } = render(<Header />);

    const imageElement = getByAltText('kitos garden icon');
    const anchorElement = imageElement.closest('a');

    expect(anchorElement).toHaveAttribute('href', '/');
  });

  // responsive: burger menu onClick hides and shows links?

  it('is focusable with tab', async () => {
    const { getAllByText } = render(<Header />);

    const ProjectsLink = getAllByText('Projects');

    expect(ProjectsLink[1]).not.toHaveFocus();
    for (let i = 0; i < 5; i++) {
      await userEvent.tab();
    }
    expect(ProjectsLink[1]).toHaveFocus();
  });
});
