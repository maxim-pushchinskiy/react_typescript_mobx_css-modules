import FormStore from '../../components/Form/FormStore';
import { IFormField } from '../../components/Form/FormStore';

class HomePageStore extends FormStore {
    public constructor() {
        super({
            'email': {
                name: 'email',
                rule: 'required|email',
                error: '',
                isValid: false,
                value: ''
            },
            'password': {
                name: 'password',
                rule: 'required|string',
                error: '',
                isValid: false,
                value: ''
            }
        } as IFormField);
    }
}

const instance: HomePageStore = new HomePageStore();
export default instance;