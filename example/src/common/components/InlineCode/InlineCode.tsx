import './InlineCode.css';

export const InlineCode = ({ children }: { children?: React.ReactNode }) => (
    <code className="inline">{ children }</code>
);
