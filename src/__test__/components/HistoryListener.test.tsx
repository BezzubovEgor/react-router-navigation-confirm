import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HistoryListener } from '../../lib/components/HistoryListener';

describe('<HistoryListener/>', () => {
    it('should render children', () => {
        render(
            <MemoryRouter>
                <HistoryListener>
                    <div>Test Child</div>
                </HistoryListener>
            </MemoryRouter>
        );
        expect(screen.getByText('Test Child')).toBeInTheDocument();
    });

    it('should render nothing if no children provided', () => {
        const { container } = render(
            <MemoryRouter>
                <HistoryListener />
            </MemoryRouter>
        );
        expect(container.firstChild).toBeNull();
    });
});
