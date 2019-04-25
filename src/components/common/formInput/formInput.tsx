import React from 'react';
import { Input, InputProps } from 'react-native-elements';
import formStyles, { FormInputStyleSchema } from './formInput.style';
import merge from '../../../utils/merge';
import omit from '../../../utils/omit';

interface Props extends InputProps {
    styles?: Partial<FormInputStyleSchema>;
}

const defaultProps = {
    styles: {},
};

export default class FormInput extends React.Component<Props> {
    static defaultProps = defaultProps;
    styles = merge(formStyles, this.props.styles);

    render() {
        return (
            <Input
                inputStyle={this.styles.formField}
                labelStyle={this.styles.formLabel}
                {...omit(this.props, 'styles')}
            />
        );
    }
}
