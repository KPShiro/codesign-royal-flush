import LogoImage from '/images/logo.gif';

type LogoProps = Omit<React.ComponentProps<'img'>, 'src' | 'alt'>;

export const Logo = (props: LogoProps) => {
    return <img src={LogoImage} alt="Royal Flush" {...props} />;
};
