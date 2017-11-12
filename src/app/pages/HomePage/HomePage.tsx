import * as React from 'react';
import { observer } from 'mobx-react';
import FormInput from '../../components/Form/FormInput/FormInput';
import store from './HomePageStore';

const HomePage: () => JSX.Element = () => {
    return (
        <div>
            <form action=''>
                <FormInput  name={ store.fields.email.name }
                            type='email'
                            label='Email:'
                            error={ store.fields.email.error }
                            onChange={ store.onFieldChange }
                />
                <FormInput  name={ store.fields.password.name }
                            type='password'
                            label='Password:'
                            error={ store.fields.password.error }
                            onChange={ store.onFieldChange }
                />
                <button type='submit' disabled={ !store.isValid }>Submit</button>
            </form>
        </div>
    );
};

export default observer(HomePage);