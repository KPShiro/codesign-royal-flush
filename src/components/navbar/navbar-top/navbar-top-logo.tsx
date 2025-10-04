import { Link } from '@tanstack/react-router';
import { Logo } from '@components/logo';

export const NavbarTopLogo = () => {
    return (
        <Link to="/" className="size-10 shrink-0 grow-0 cursor-pointer">
            <Logo className="size-full scale-150 object-contain" />
        </Link>
    );
};
