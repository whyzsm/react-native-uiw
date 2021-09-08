import React from 'react';
import PropTypes from 'prop-types';
import { TextProps } from 'react-native';
export interface EllipsisProps extends TextProps {
    children?: React.ReactNode;
    placeholder?: string;
    maxLen?: number;
}
declare function Ellipsis({ maxLen, children, placeholder, ...props }: EllipsisProps): JSX.Element;
declare namespace Ellipsis {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        placeholder: PropTypes.Requireable<string>;
        maxLen: PropTypes.Requireable<number>;
    };
    var defaultProps: {
        placeholder: string;
    };
}
export default Ellipsis;
