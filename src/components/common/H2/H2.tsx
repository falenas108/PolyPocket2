import React from 'react';
import h2Styles, { H2StyleSchema } from './H2.style';
import merge from '../../../utils/merge';
import { Text, TextProps } from 'react-native';
import omit from '../../../utils/omit';

interface Props extends TextProps {
    children: JSX.Element | JSX.Element[];
    styles?: Partial<H2StyleSchema>;
}

const defaultProps = {
    styles: {},
};

export default class H2 extends React.Component<Props> {
    static defaultProps = defaultProps;
    styles = merge(h2Styles, this.props.styles);

    render() {
        return (
            <Text style={this.styles.h2} {...omit(this.props, 'styles')}>
                {this.props.children}
            </Text>
        );
    }
}
