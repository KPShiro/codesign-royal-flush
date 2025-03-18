import LogoGif from '/images/logo.gif';

export const NavbarLogo = () => {
    return (
        <div className="size-10 shrink-0 grow-0">
            <img src={LogoGif} alt="SLOTS" className="size-full scale-150 object-contain" />
        </div>
    );
};
