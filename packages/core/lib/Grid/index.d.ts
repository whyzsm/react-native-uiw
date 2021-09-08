import React, { Component } from 'react';
import { ViewProps, ViewStyle, TextStyle, StyleProp, ImageStyle, GestureResponderEvent } from 'react-native';
interface ItemData {
    icon?: React.ReactNode;
    text?: React.ReactNode;
}
export interface GridProps extends ViewProps {
    data?: ItemData[];
    columns?: number;
    hasLine?: boolean;
    itemStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle & ViewStyle>;
    iconStyle?: StyleProp<ImageStyle & TextStyle & ViewStyle>;
    renderItem?: (data: ItemData, index: number, row: number) => React.ReactNode;
    onPress?: (data: ItemData, index: number, row: number, event: GestureResponderEvent) => void;
}
export default class Grid extends Component<GridProps> {
    static defaultProps: GridProps;
    render(): JSX.Element | null;
}
export {};
