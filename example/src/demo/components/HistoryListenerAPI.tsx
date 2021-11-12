
import { APITable } from 'src/common/components';

export const HistoryListenerAPI = () => (
    <APITable dataSource={[
            {
                default: <code className="inline">undefined</code>,
                desc: 'React element / node to render into the HistoryListener component',
                key: 1,
                prop: 'children',
                type: 'React.ReactNode',
            }
        ]}
    />
)
