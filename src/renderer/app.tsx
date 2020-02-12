import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Application from './components/Application';
import store from './store';
import { createStyleLink } from './html/CreateTag';

// Create main element
const mainElement = document.createElement('div');
document.head.appendChild(createStyleLink("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"));
document.head.appendChild(createStyleLink("https://fonts.googleapis.com/icon?family=Material+Icons"));
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        mainElement
    );
};

render(Application);
