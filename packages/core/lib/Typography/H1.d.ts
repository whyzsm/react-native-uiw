import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface H1Props extends TextProps {
    children?: React.ReactNode;
}
declare function H1(props: H1Props): JSX.Element;
declare namespace H1 {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default H1;
