export class MatchMock {
  public constructor(
    public isExact = true,
    public params = {},
    public path = "",
    public url = ""
  ) {}
}
