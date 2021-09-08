import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface StrongProps extends TextProps {
    children?: React.ReactNode;
}
declare function Strong(props: StrongProps): JSX.Element;
declare namespace Strong {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<any>;
    };
    var defaultProps: {};
}
export default Strong;
