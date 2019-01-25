import { HistoryService } from "../lib/history-service";


describe('test history service', () => {
    let historyService: HistoryService;
    const key = 'test-1';

    beforeEach(() => {
        historyService = new HistoryService();
    });

    it('should add new history key to service', () => {
        historyService.add(key);
        expect((historyService as any).history).toEqual([ key ]);
    });

    it('should not add empty key to history', () => {
        historyService.add(undefined);
        historyService.add('');

        expect((historyService as any).history).toEqual([ ]);
    });

    it('should not add already added key to history', () => {
        historyService.add(key);
        expect((historyService as any).history).toEqual([ key ]);

        historyService.add(key);
        expect((historyService as any).history).toEqual([ key ]);
    });
});