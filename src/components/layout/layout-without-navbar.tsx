import { PageContainer } from '@components/page';
import { PropsWithChildren } from 'react';

type LayoutWithoutNavbarProps = PropsWithChildren;

const LayoutWithoutNavbar = ({ ...props }: LayoutWithoutNavbarProps) => {
    return <PageContainer {...props} />;
};

export default LayoutWithoutNavbar;
