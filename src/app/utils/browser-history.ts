import { useRouterHistory } from 'react-router';
import { extendObservable, IObservableValue, observable } from 'mobx';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {History, HistoryQueries, Location} from 'history';

type CustomHistory = History & HistoryQueries & {location: IObservableValue<Location>};

const customHistory: CustomHistory = useRouterHistory(createBrowserHistory)({basename: __BASE__}) as CustomHistory;
(customHistory as any).location = extendObservable(observable.ref(null as Location));
customHistory.listen((l: Location) => {
  customHistory.location.set(l);
});


export default customHistory;