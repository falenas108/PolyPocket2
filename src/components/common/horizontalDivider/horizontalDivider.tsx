import React from 'react';
import horizontalDividerStyles, {
    HorizontalDividerStyleSchema,
} from './horizontalDivider.style';
import merge from '../../../utils/merge';
import { View } from 'react-native';

interface Props {
    styles?: HorizontalDividerStyleSchema;
}
export default function Divider(props: Props) {
    const styles: HorizontalDividerStyleSchema = merge(
        horizontalDividerStyles,
        props.styles
    );

    return <View style={styles.horizontalDivider} />;
}
