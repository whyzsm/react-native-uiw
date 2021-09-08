import React from 'react';
import PropTypes from 'prop-types';
import { ViewProps, StyleProp, TextStyle } from 'react-native';
import { colors } from '../utils';
export interface BadgeProps extends ViewProps {
    children?: React.ReactNode;
    color?: colors.Colors | string;
    text?: string | Element;
    /**
     * 设置圆角，默认 `12`
     */
    rounded?: number;
    type?: 'dot' | 'text';
    textStyles?: StyleProp<TextStyle>;
}
declare function Badge(props: BadgeProps): JSX.Element;
declare namespace Badge {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        color: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<any>;
        text: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    };
    var defaultProps: {
        color: string;
        type: string;
    };
}
export default Badge;
