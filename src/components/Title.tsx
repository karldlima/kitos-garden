interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: TitleProps): JSX.Element => (
  <section className="text-center my-16 md:my-32">
    <h1 className="mb-3">{title}</h1>
    <h3 className="text-primary">{subtitle}</h3>
  </section>
);
Title.displayName = "Title";
