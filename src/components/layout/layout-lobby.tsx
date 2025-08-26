import { Navbar } from '@components/navbar';
import { PageContainer, PageWrapper } from '@components/page';
import { BaseLayoutProps } from './layout';

const LayoutLobby = ({ children }: BaseLayoutProps) => {
    return (
        <>
            <Navbar className="sticky top-0 z-10" />
            {/* TODO: Update this layout to add scrollable tracks of games, similar to Netflix. */}
            <PageContainer>
                <PageWrapper>{children}</PageWrapper>
            </PageContainer>
        </>
    );
};

export default LayoutLobby;
