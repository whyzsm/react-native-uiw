import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface SProps extends TextProps {
    children?: React.ReactNode;
}
declare function S(props: SProps): JSX.Element;
declare namespace S {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default S;
