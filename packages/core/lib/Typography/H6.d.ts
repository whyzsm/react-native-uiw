import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface H6Props extends TextProps {
    children?: React.ReactNode;
}
declare function H6(props: H6Props): JSX.Element;
declare namespace H6 {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default H6;
