interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: TitleProps): JSX.Element => (
  <section className="text-center my-16 md:my-32">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </section>
);
