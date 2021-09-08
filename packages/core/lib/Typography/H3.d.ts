import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface H3Props extends TextProps {
    children?: React.ReactNode;
}
declare function H3(props: H3Props): JSX.Element;
declare namespace H3 {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default H3;
