import * as React from 'react';

const styles: any = require('./appComponent.scss');

const AppComponent: () => JSX.Element = () => {
    return (
        <div className={styles.hello}>
            Hello!
        </div>

    );
};

export default AppComponent;