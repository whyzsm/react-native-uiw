import { Component } from 'react';
import { ViewProps } from 'react-native';
export interface FlexItemProps extends ViewProps {
}
export default class FlexItem extends Component<FlexItemProps> {
    render(): JSX.Element;
}
