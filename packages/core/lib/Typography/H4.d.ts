import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface H4Props extends TextProps {
    children?: React.ReactNode;
}
declare function H4(props: H4Props): JSX.Element;
declare namespace H4 {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default H4;
