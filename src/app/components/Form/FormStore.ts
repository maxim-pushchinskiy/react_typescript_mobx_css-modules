import { action, autorun, computed,  observable } from 'mobx';
import * as Validator from 'validatorjs';

export interface IField {
    name: string;
    rule: string;
    isValid: boolean;
    error: string;
    value?: any;
    checked?: boolean;
}

interface IError {
    [key: string]: string;
}

export interface IFormField {
    [key: string]: IField;
}

export default class FormStore {
    @observable
    public fields: IFormField;


    @observable
    public meta: IError = {};

    public constructor(fields: IFormField) {
        this.fields = fields;
    }

    @computed
    public get isValid(): boolean {
        return Object.values(this.fields).reduce((res: boolean, item: IField) => {
            if(!item.isValid) {
                res = item.isValid;
            }

            return res;
        }, true);
    }

    @action
    public onFieldChange: (target: HTMLInputElement) => void = (target) => {
        // if user click on label - we have not property 'name', so we need target.id
        const name: string = target.name || target.id;

        // if input is checkbox, it value stored in 'checked' property
        const type: string = target.type === 'checkbox' ? 'checked' : 'value';
        this.fields[name][type] = target[type];
        // tslint:disable-next-line
        const validation: Validator = new Validator({[name]: this.fields[name][type]}, {[name]: this.fields[name].rule});
        this.fields[name].isValid = validation.passes();
        this.fields[name].error = validation.errors.first(name);
    };
}