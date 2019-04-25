import React from 'react';
import { Input, InputProps } from 'react-native-elements';
import formStyles from './formInput.style';

interface Props extends InputProps {}

export default class Form extends React.Component<Props> {
    styles = formStyles;

    render() {
        return <Input {...this.props} />;
    }
}
