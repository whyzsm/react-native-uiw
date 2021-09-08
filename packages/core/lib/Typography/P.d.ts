import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface PProps extends TextProps {
    children?: React.ReactNode;
}
declare function P(props: PProps): JSX.Element;
declare namespace P {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default P;
