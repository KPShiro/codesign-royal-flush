import { PageContainer, PageWrapper } from '@components/page';
import { BaseLayoutProps } from './layout';

const LayoutWithoutNavbar = ({ children }: BaseLayoutProps) => {
    return (
        <PageContainer>
            <PageWrapper>{children}</PageWrapper>
        </PageContainer>
    );
};

export default LayoutWithoutNavbar;
