import { Component } from 'react';
import { ViewProps } from 'react-native';
export interface SpacingProps extends ViewProps {
    size?: 'small' | 'default' | 'large' | number;
    type?: 'horizontal' | 'vertical';
}
export default class Spacing extends Component<SpacingProps> {
    static defaultProps: SpacingProps;
    render(): JSX.Element;
}
