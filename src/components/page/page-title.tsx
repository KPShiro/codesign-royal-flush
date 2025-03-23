type PageTitleProps = {
    title: string;
    description?: string;
};

export const PageTitle = ({ title, description }: PageTitleProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl">{title}</h1>
            {description ? (
                <p className="text-on-surface/60 max-w-prose text-sm">{description}</p>
            ) : null}
        </div>
    );
};
