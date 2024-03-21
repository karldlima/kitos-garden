import { useEffect, useState } from 'react';

interface HeroIconProps {
  icon: string;
  outline?: boolean;
  mini?: boolean;
  version?: string;
  className?: string;
}

export const HeroIcon = ({
  icon,
  outline = false,
  mini = false,
  version = '2.1.1',
  className = 'w-6 h-6 text-slate-600',
  ...props
}: HeroIconProps): JSX.Element => {
  const [svg, setSvg] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/heroicons@${version}/${
      version.startsWith('2') && (mini ? '20/' : '24/')
    }${outline ? 'outline' : 'solid'}/${icon}.svg`;
    fetch(url)
      .then((res) => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true));
  }, [icon, mini, outline, version]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    />
  );
};
HeroIcon.displayName = 'HeroIcon';
