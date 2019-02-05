import { Location } from "history";

export class LocationMock implements Location {
  public constructor(
    public hash = "",
    public key = "",
    public pathname = "",
    public search = "",
    public state = ""
  ) {}
}
