import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface H5Props extends TextProps {
    children?: React.ReactNode;
}
declare function H5(props: H5Props): JSX.Element;
declare namespace H5 {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default H5;
