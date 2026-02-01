import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { NavigationConfirmModal } from '../../lib/components/NavigationConfirmModal';
import { HistoryListener } from '../../lib/components/HistoryListener';

describe('<NavigationConfirmModal/>', () => {
    const childrenText = 'Custom modal text';
    
    const setupRouter = (when = true) => {
        const routes = [
            {
                path: "/",
                element: (
                    <HistoryListener>
                        <Outlet />
                    </HistoryListener>
                ),
                children: [
                    {
                        path: "page1",
                        element: (
                            <>
                                <h1>Page 1</h1>
                                <Link to="/page2">Go to Page 2</Link>
                                <NavigationConfirmModal when={when}>
                                    {childrenText}
                                </NavigationConfirmModal>
                            </>
                        )
                    },
                    {
                        path: "page2",
                        element: <h1>Page 2</h1>
                    }
                ]
            }
        ];

        const router = createMemoryRouter(routes, {
            initialEntries: ["/page1"],
        });

        return router;
    };

    it('should show modal when trying to navigate away', () => {
        const router = setupRouter();
        render(<RouterProvider router={router} />);
        fireEvent.click(screen.getByText('Go to Page 2'));
        expect(screen.getByText(childrenText)).toBeInTheDocument();
    });

    it('should navigate when confirmed', () => {
        const router = setupRouter();
        render(<RouterProvider router={router} />);
        fireEvent.click(screen.getByText('Go to Page 2'));
        fireEvent.click(screen.getByText('Confirm'));
        expect(screen.getByText('Page 2')).toBeInTheDocument();
    });

    it('should stay on page when canceled', () => {
        const router = setupRouter();
        render(<RouterProvider router={router} />);
        fireEvent.click(screen.getByText('Go to Page 2'));
        fireEvent.click(screen.getByText('Cancel'));
        expect(screen.getByText('Page 1')).toBeInTheDocument();
    });
});
