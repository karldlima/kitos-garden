import { render, cleanup, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DisplayCard } from '@/components';

jest.mock('next/router', () => {
  const pushMock = jest.fn();
  const mockRouter = {
    asPath: '',
    push: pushMock,
  };
  return {
    useRouter: jest.fn().mockReturnValue(mockRouter),
  };
});

const sampleCardData = {
  id: 1,
  title: 'Sample Card Title',
  date: '2024-04-16',
  blurb:
    'This is a sample card blurb. It can contain some information about the card.',
  slug: 'sample-card-slug',
  image: {
    data: {
      id: 24,
      attributes: {
        name: 'resources',
        alternativeText: undefined,
        caption: undefined,
        width: 1792,
        height: 1256,
        formats: {
          large: getImageFormatData(
            'large',
            1000,
            701,
            599.18,
            'large_Screen Shot',
          ),
          small: getImageFormatData(
            'small',
            500,
            350,
            161.94,
            'small_Screen Shot',
          ),
          medium: getImageFormatData(
            'medium',
            750,
            526,
            346.51,
            'medium_Screen Shot',
          ),
          thumbnail: getImageFormatData(
            'thumbnail',
            223,
            156,
            42.5,
            'thumbnail_Screen Shot',
          ),
        },
        hash: 'Screen_Shot_',
        ext: '.png',
        mime: 'image/png',
        size: 425.89,
        url: '',
        previewUrl: undefined,
        provider: 'cloudinary',
        provider_metadata: {
          public_id: 'Screen_Shot_',
          resource_type: 'image',
        },
        createdAt: '2024-03-15T04:43:10.312Z',
        updatedAt: '2024-03-15T05:28:33.915Z',
      },
    },
  },
};

function getImageFormatData(
  ext: string,
  width: number,
  height: number,
  size: number,
  name: string,
) {
  return {
    ext: '.png',
    url: ``,
    hash: `${ext}_Screen_Shot_2024_03_15_at_3_42_28_pm_121d9917a7`,
    mime: 'image/png',
    name: name,
    path: undefined,
    size: size,
    width: width,
    height: height,
    provider_metadata: {
      public_id: `${ext}_Screen_Shot_2024_03_15_at_3_42_28_pm_121d9917a7`,
      resource_type: 'image',
    },
  };
}

const sampleKeyWords = 'Sample, Keywords, Example';

describe('DisplayCard', () => {
  let renderDisplayCard: () => RenderResult;
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.resetMocks();
    renderDisplayCard = () =>
      render(
        <DisplayCard
          cardData={sampleCardData}
          keyWords={sampleKeyWords}
          data-testid="test-displaycard"
        />,
      );
  });
  afterEach(cleanup);

  it('renders successfully', () => {
    const { container } = renderDisplayCard();
    expect(container).toBeInTheDocument();
  });
  it('contains the correct href for title', () => {
    const { getByText } = renderDisplayCard();

    const title = getByText('Sample Card Title');
    const anchorElement = title.closest('a');

    expect(anchorElement).toHaveAttribute('href', '/sample-card-slug');
  });
  it('contains the correct url for read more ButtonLink', () => {
    const { getByText } = renderDisplayCard();
    const buttonLink = getByText('Read more');

    expect(buttonLink).toHaveAttribute('href', '/sample-card-slug');
  });

  it('is focusable with tab', async () => {
    const { getByText } = renderDisplayCard();

    const buttonLink = getByText('Read more');

    expect(buttonLink).not.toHaveFocus();
    for (let i = 0; i < 3; i++) {
      await userEvent.tab();
    }
    expect(buttonLink).toHaveFocus();
  });
});
