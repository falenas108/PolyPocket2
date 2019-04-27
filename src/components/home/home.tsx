import React from 'react';
import merge from '../../utils/merge';
import {
    TextProps,
    TouchableOpacity,
    Text,
    TouchableOpacityProps,
} from 'react-native';
import homeStyles, { HomeSchema } from './home.style';
import { H2 } from '../common';
import omit from '../../utils/omit';

interface Props extends TouchableOpacityProps {
    children: JSX.Element | JSX.Element[] | string;
    styles?: Partial<HomeSchema>;
}

const defaultProps = {
    styles: {},
};

export default class PrimaryButton extends React.Component<Props> {
    static defaultProps = defaultProps;
    styles: HomeSchema = merge(homeStyles, this.props.styles);

    render() {
        return (
            <TouchableOpacity
                style={this.styles.primaryButton}
                {...omit(this.props, 'styles')}>
                <H2 styles={{ h2: this.styles.text }}>{this.props.children}</H2>
            </TouchableOpacity>
        );
    }
}
