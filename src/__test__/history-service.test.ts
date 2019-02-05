import { HistoryService } from "../lib/history-service";

describe("test history service", () => {
  let historyService: HistoryService;
  const key = "test-1";

  beforeEach(() => {
    historyService = new HistoryService();
  });

  it("should add new history key to service", () => {
    historyService.add(key);
    expect((historyService as any).history).toEqual([key]);
  });

  it("should not add empty key to history", () => {
    historyService.add(undefined);
    historyService.add("");

    expect((historyService as any).history).toEqual([]);
  });

  it("should not add already added key to history", () => {
    historyService.add(key);
    expect((historyService as any).history).toEqual([key]);

    historyService.add(key);
    expect((historyService as any).history).toEqual([key]);
  });

  it("should check if is forward action or not", () => {
    historyService.add("1");
    historyService.add("2");
    historyService.add("3");
    historyService.add("2"); // prev should be change to 2 but not 2 should not be added

    expect(historyService.isForward("3")).toBeTruthy();
    expect(historyService.isForward("1")).toBeFalsy();
  });
});
