import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { NavigationConfirm } from '../../lib/components/NavigationConfirm';
import { HistoryListener } from '../../lib/components/HistoryListener';

describe('<NavigationConfirm/>', () => {
    const childrenText = 'Confirm leaving?';
    
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
                                <NavigationConfirm when={when}>
                                    {({ onConfirm, onCancel }) => (
                                        <div role="dialog">
                                            <p>{childrenText}</p>
                                            <button onClick={onConfirm}>Confirm</button>
                                            <button onClick={onCancel}>Cancel</button>
                                        </div>
                                    )}
                                </NavigationConfirm>
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

    it('should not show confirmation initially', () => {
        const router = setupRouter();
        render(<RouterProvider router={router} />);
        expect(screen.queryByText(childrenText)).not.toBeInTheDocument();
    });

    it('should show confirmation when trying to navigate away', () => {
        const router = setupRouter();
        render(<RouterProvider router={router} />);
        fireEvent.click(screen.getByText('Go to Page 2'));
        expect(screen.getByText(childrenText)).toBeInTheDocument();
        expect(screen.queryByText('Page 2')).not.toBeInTheDocument();
    });

    it('should navigate when confirmed', () => {
        const router = setupRouter();
        render(<RouterProvider router={router} />);
        fireEvent.click(screen.getByText('Go to Page 2'));
        fireEvent.click(screen.getByText('Confirm'));
        expect(screen.queryByText(childrenText)).not.toBeInTheDocument();
        expect(screen.getByText('Page 2')).toBeInTheDocument();
    });

    it('should stay on page when canceled', () => {
        const router = setupRouter();
        render(<RouterProvider router={router} />);
        fireEvent.click(screen.getByText('Go to Page 2'));
        fireEvent.click(screen.getByText('Cancel'));
        expect(screen.queryByText(childrenText)).not.toBeInTheDocument();
        expect(screen.getByText('Page 1')).toBeInTheDocument();
        expect(screen.queryByText('Page 2')).not.toBeInTheDocument();
    });

    it('should not show confirmation if when=false', () => {
        const router = setupRouter(false);
        render(<RouterProvider router={router} />);
        fireEvent.click(screen.getByText('Go to Page 2'));
        expect(screen.queryByText(childrenText)).not.toBeInTheDocument();
        expect(screen.getByText('Page 2')).toBeInTheDocument();
    });
});
