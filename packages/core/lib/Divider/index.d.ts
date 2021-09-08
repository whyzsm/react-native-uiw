import { Component } from 'react';
import { ViewProps, TextProps } from 'react-native';
export interface DividerProps extends ViewProps {
    label?: string;
    gutter?: number;
    style?: ViewProps['style'];
    lineStyle?: ViewProps['style'];
    labelStyle?: TextProps['style'];
    type?: 'horizontal' | 'vertical';
}
export default class Divider extends Component<DividerProps> {
    static defaultProps: DividerProps;
    render(): JSX.Element;
}
