import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface EmProps extends TextProps {
    children?: React.ReactNode;
}
declare function Em(props: EmProps): React.FunctionComponentElement<any>;
declare namespace Em {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default Em;
