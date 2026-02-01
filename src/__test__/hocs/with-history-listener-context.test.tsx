import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { withHistoryService } from '../../lib/hocs/with-history-listener-context';
import { HistoryListener } from '../../lib/components/HistoryListener';
import { HistoryService } from '../../lib/services';

const MockComponent: React.FC<{ historyService?: HistoryService }> = ({ historyService }) => (
    <div>{historyService ? 'Service Present' : 'No Service'}</div>
);

const ComponentWithService = withHistoryService(MockComponent);

describe('withHistoryService HOC', () => {
    it('should provide historyService from context', () => {
        const routes = [
            {
                path: "/",
                element: (
                    <HistoryListener>
                        <ComponentWithService />
                    </HistoryListener>
                )
            }
        ];
        const router = createMemoryRouter(routes);
        render(<RouterProvider router={router} />);
        expect(screen.getByText('Service Present')).toBeInTheDocument();
    });
});
