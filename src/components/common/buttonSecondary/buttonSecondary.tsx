import React from 'react';
import primaryButtonStyles, {
    SecondaryButtonSchema,
} from './buttonSecondary.style';
import merge from '../../../utils/merge';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import omit from '../../../utils/omit';
import { H2 } from '..';

interface Props extends TouchableOpacityProps {
    children: JSX.Element | JSX.Element[] | string;
    styles?: Partial<SecondaryButtonSchema>;
}

const defaultProps = {
    styles: {},
};

export default class ButtonSecondary extends React.Component<Props> {
    static defaultProps = defaultProps;
    styles: SecondaryButtonSchema = merge(
        primaryButtonStyles,
        this.props.styles
    );

    render() {
        return (
            <TouchableOpacity
                style={this.styles.secondaryButton}
                {...omit(this.props, 'styles')}>
                <H2 styles={{ h2: this.styles.text }}>{this.props.children}</H2>
            </TouchableOpacity>
        );
    }
}
