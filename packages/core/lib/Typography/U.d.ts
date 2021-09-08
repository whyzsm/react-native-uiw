import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface UProps extends TextProps {
    children?: React.ReactNode;
}
declare function U(props: UProps): JSX.Element;
declare namespace U {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default U;
