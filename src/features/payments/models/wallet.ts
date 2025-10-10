import { LucideProps } from 'lucide-react';

export type WalletID = string;

export type WalletConfig = {
    id: WalletID;
    label: string;
    icon: React.ElementType<LucideProps>;
    formatter: (value: number) => string;
    isDefault: boolean;
};
