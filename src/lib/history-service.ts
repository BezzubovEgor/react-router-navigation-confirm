export class HistoryService {
    private history: string[] = [];
    private prev: string;

    public add(key: string | undefined) {
        if (key === undefined) {
            return;
        }

        if (this.history.indexOf(key) < 0) {
            this.history.push(key);
        }

        this.prev = key;
    }

    public isForward(current: string | undefined) {
        return current && this.history.indexOf(current) > this.history.indexOf(this.prev);
    }
}

export const HISTORY_SERVICE = new HistoryService();

