import React from 'react';
import h2Styles, { H2StyleSchema } from './H2.style';
import merge from '../../../utils/merge';
import { Text, TextProps } from 'react-native';
import omit from '../../../utils/omit';

interface Props extends TextProps {
    children: JSX.Element | JSX.Element[] | string;
    styles?: Partial<H2StyleSchema>;
}

export default function H2(props: Props) {
    const styles: H2StyleSchema = merge(h2Styles, props.styles);

    return (
        <Text style={styles.h2} {...omit(props, 'styles')}>
            {props.children}
        </Text>
    );
}
