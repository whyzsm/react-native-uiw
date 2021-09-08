import { Component } from 'react';
import { ViewProps } from 'react-native';
export interface WingBlankProps extends ViewProps {
    /**
     * 按钮尺寸
     */
    size?: 'small' | 'default' | 'large' | number;
}
export default class WingBlank extends Component<WingBlankProps> {
    static defaultProps: WingBlankProps;
    render(): JSX.Element;
}
