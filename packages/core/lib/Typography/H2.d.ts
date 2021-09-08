import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface H2Props extends TextProps {
    children?: React.ReactNode;
}
declare function H2(props: H2Props): JSX.Element;
declare namespace H2 {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default H2;
