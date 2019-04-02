import { Action, Location } from 'history';

class HistoryService {
  private history: string[] = [];
  private prev: string;

  public add(key: string | undefined) {
    if (!key) {
      return;
    }

    if (this.history.indexOf(key) < 0) {
      this.history.push(key);
    }

    this.prev = key;
  }

  public isForward(current: string | undefined): boolean {
    return (
      !!current &&
      this.history.indexOf(current) > this.history.indexOf(this.prev)
    );
  }

  public getHistoryFunction = (location: Location, action: Action): string => {
    
    return {
        POP: () => this.isForward(location.key) ? 'goForward' : 'goBack',
        PUSH: () => 'push',
        REPLACE: () => 'replace'
    }[action]();
  }
}

export {
  HistoryService,
}
