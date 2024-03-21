import font from 'next/font/local';

export const rounds = font({
  src: [
    {
      path: '../../../public/assets/fonts/TTRounds-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/TTRounds-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-rounds',
  display: 'swap',
  preload: true,
});

export const avenir = font({
  src: [
    {
      path: '../../../public/assets/fonts/AvenirNextLTPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/AvenirNextLTPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-avenir-next',
  display: 'swap',
  preload: true,
});
