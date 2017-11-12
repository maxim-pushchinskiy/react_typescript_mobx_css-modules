import * as React from 'react';

import * as classNames from 'classnames';
import RenderIf from '../../RenderIf';

const styles: any = require('./formInput.scss');
const formStyles: any = require('../commonForm.scss');

const enum LabelPosition { Before, After }

export interface IFormInputProps {
    name: string;
    type: string;
    onChange?: (target: HTMLInputElement) => void;
    onBlur?: (target: HTMLInputElement) => void;
    disabled?: boolean;
    formInputClass?: string;
    inputClass?: string;
    error?: string;
    value?: string | number;
    checked?: boolean;
    label?: string;
    auxLink?: string;
    inputBefore?: boolean;
    placeholder?: string;
    id?: string;
    required?: boolean;
    hint?: string;
    hintClassName?: string;
}

const cx: any = classNames.bind(styles);

// Note that React.SFC is alias for React.StatelessComponent
const FormInput: React.SFC<IFormInputProps> = (props: IFormInputProps) => {
    // tslint:disable-next-line
    const { error, name, hint, type, label, id, inputBefore, hintClassName, formInputClass, inputClass, value, required, onBlur, ...rest } = props;
    const position: LabelPosition = inputBefore === true ? LabelPosition.After : LabelPosition.Before;
    const containerClass: string = cx({ [formInputClass]: !!formInputClass, [styles.container]: !formInputClass });
    const inputWrapperClass: string = cx({ [styles.checkbox]: (type === 'checkbox') });
    const inputStyle: string = cx({
        [styles.field]: !formInputClass,
        [inputClass]: !!inputClass,
        [styles.error]: !!error
    });
    const labelStyle: string = cx({ [styles.label]: !formInputClass, [formStyles.labelMargin]: !!hint });
    const onChange: (e: React.SyntheticEvent<EventTarget>) => void = (e) => {
        e.stopPropagation();
        const target: HTMLInputElement = e.target as HTMLInputElement;
        props.onChange(target);
    };
    const blurValidation: (e: React.SyntheticEvent<EventTarget>) => void = (e) => {
        e.stopPropagation();
        const target: HTMLInputElement = e.target as HTMLInputElement;
        return props.onBlur(target);
    };

    return (
        <div className={ containerClass }>
            { (label && !position)
                ? <label className={ labelStyle }
                         htmlFor={ name }
                         dangerouslySetInnerHTML={{
                             __html: (required && type !== 'checkbox' ? `${ label }*` : label)
                         }} />
                : null
            }

            <div>
                <div className={ inputWrapperClass }>
                    <input  { ...rest }
                        type={ type }
                        id={ id || name }
                        name={ name }
                        value={ value }
                        className={ inputStyle }
                        onChange={ onChange }
                        onBlur={ blurValidation }
                    />

                    { (label && position)
                        ? <label className={ labelStyle }
                                 htmlFor={ type !== 'radio' ? name : id }
                                 dangerouslySetInnerHTML={{
                                     __html: (required && type !== 'checkbox' ? `${ label }*` : label)
                                 }} />
                        : null
                    }

                    <RenderIf condition={ !!error }>
                        <p className={ ['error', formStyles.error].join(' ') }>{ error }</p>
                    </RenderIf>
                    <RenderIf condition={ !!hint }>
                        <p className={ [formStyles.hint, hintClassName].join(' ') }>{ hint }</p>
                    </RenderIf>
                </div>
            </div>
        </div>
    );
};

FormInput.defaultProps = {
    hintClassName: '',
    onBlur: () => {},
    onChange: () => {},
};

export default FormInput;