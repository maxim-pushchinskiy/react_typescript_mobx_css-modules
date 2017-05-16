import { useRouterHistory } from "react-router";
import {observable, extendObservable, IObservableValue} from "mobx";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {History, HistoryQueries, Location} from "history";

type CustomHistory = History & HistoryQueries & {location: IObservableValue<Location>};

const customHistory = useRouterHistory(createBrowserHistory)({basename: __BASE__}) as CustomHistory;
(<any>customHistory).location = extendObservable(observable.ref(null as Location));
customHistory.listen(l => {
  customHistory.location.set(l);
});

export default customHistory;