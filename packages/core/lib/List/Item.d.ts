import React, { Component } from 'react';
import { ViewProps, StyleProp, TextStyle, ViewStyle, TouchableWithoutFeedbackProps } from 'react-native';
export interface ListItemProps extends ViewProps, TouchableWithoutFeedbackProps {
    underlayColor?: string;
    paddingLeft?: number;
    extra?: React.ReactNode;
    extraStyle?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
    touchableStyle?: StyleProp<ViewStyle>;
    /**
     * 单元格大小
     */
    size?: 'small' | 'default' | 'large';
}
export default class ListItem extends Component<ListItemProps> {
    static defaultProps: ListItemProps;
    render(): JSX.Element;
}
