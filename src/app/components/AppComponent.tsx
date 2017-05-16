import * as React from 'react';

const styles = require('./appComponent.scss');

const AppComponent = () => {
    console.log(styles);
    return (
        <div className={styles.hello}>
            Hello world!
        </div>

    )
};

export default AppComponent;