import React from 'react';
import pargraphStyles, { ParagraphStyleSchema } from './paragraph.style';
import merge from '../../../utils/merge';
import { Text, TextProps } from 'react-native';
import omit from '../../../utils/omit';

interface Props extends TextProps {
    children: JSX.Element | JSX.Element[] | string;
    styles?: Partial<ParagraphStyleSchema>;
}

export default function H2(props: Props) {
    const styles: ParagraphStyleSchema = merge(pargraphStyles, props.styles);

    return (
        <Text style={styles.paragraph} {...omit(props, 'styles')}>
            {props.children}
        </Text>
    );
}
