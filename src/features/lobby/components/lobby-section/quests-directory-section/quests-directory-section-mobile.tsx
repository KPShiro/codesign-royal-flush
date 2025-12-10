import { QuestsDirectorySection } from "@src/models/lobby-section";

export const QuestsDirectorySectionMobile = (props: QuestsDirectorySection) => {
    // TODO: Implement the component
    return <div className="flex flex-col gap-6">{JSON.stringify(props, null, 4)}</div>;
}