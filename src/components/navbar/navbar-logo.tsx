import { useNavigate } from '@tanstack/react-router';
import LogoGif from '/images/logo.gif';

export const NavbarLogo = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate({ to: '/' })}
            className="size-10 shrink-0 grow-0 cursor-pointer"
        >
            <img src={LogoGif} alt="SLOTS" className="size-full scale-150 object-contain" />
        </button>
    );
};
