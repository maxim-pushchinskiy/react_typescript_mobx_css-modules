import * as React from 'react';
import { render as ReactDomRender } from 'react-dom';
import routes from './routes';
import { AppContainer } from 'react-hot-loader';

const root: HTMLElement = document.getElementById('root');

if(__DEBUG__) {
    if(module.hot) {
        module.hot.accept('./routes', () => {
            ReactDomRender(
                <AppContainer>
                        { require('./routes').default }
                </AppContainer>,
                root
            );
        });
    }
}

ReactDomRender(routes, root);