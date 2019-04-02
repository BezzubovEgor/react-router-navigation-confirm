import { Location } from "history";
import { RouteComponentProps } from "react-router";

import { HistoryService } from "./services/history-service";

interface IHistoryServiceComponentProps {
  historyService?: HistoryService;
}

interface IChildData {
  onCancel: () => void;
  onConfirm: () => void;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type WhenPropType =
  | boolean
  | ((location: Location, routeProps: RouteComponentProps) => boolean);
type NavigationConfirmChildren = (data: IChildData) => React.ReactNode;

export {
  Omit,
  WhenPropType,
  IHistoryServiceComponentProps as HistoryServiceComponentProps,
  IChildData as NavigationConfirmChildData,
  NavigationConfirmChildren
};
