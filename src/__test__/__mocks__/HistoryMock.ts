import { Action, History, Location } from 'history';

export const unlistenMock = jest.fn();
export const unblockMock = jest.fn();

export class HistoryMock implements History {
    public constructor(
        public location: Location,
        public unlisten: (() => void) = unlistenMock,
        public unblock: (() => void) = unblockMock,
        public action: Action = 'PUSH',
        public block = jest.fn(() => unblock),
        public createHref = jest.fn(),
        public go = jest.fn(),
        public goBack = jest.fn(),
        public goForward = jest.fn(),
        public length = 3,
        public listen = jest.fn(() => unlisten),
        public push = jest.fn(),
        public replace = jest.fn()) {
    }
}