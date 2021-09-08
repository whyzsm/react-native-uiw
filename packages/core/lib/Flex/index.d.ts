import { Component } from 'react';
import { ViewProps, FlexStyle } from 'react-native';
import FlexItem from './FlexItem';
export interface FlexProps extends ViewProps {
    direction?: FlexStyle['flexDirection'];
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}
export default class Flex extends Component<FlexProps> {
    static Item: typeof FlexItem;
    static defaultProps: FlexProps;
    render(): JSX.Element;
}
