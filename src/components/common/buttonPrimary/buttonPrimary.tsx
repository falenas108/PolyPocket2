import React from 'react';
import primaryButtonStyles, {
    PrimaryButtonSchema,
} from './buttonPrimary.style';
import merge from '../../../utils/merge';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import omit from '../../../utils/omit';
import { H2 } from '..';

interface Props extends TouchableOpacityProps {
    children: JSX.Element | JSX.Element[] | string;
    styles?: Partial<PrimaryButtonSchema>;
}

const defaultProps = {
    styles: {},
};

export default class ButtonPrimary extends React.Component<Props> {
    static defaultProps = defaultProps;
    styles: PrimaryButtonSchema = merge(primaryButtonStyles, this.props.styles);

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
